import { useState } from "react";
import axios from "axios";
import Message from "./Message";
import Send from '../icons/EmailSend.png'

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loadingMessageId, setLoadingMessageId] = useState(null);

    const sendMessage = async () => {
        const userMessages = { text: input, sender: "user", id: Date.now() };
        setMessages([...messages, userMessages]);

        setInput("");
        setLoadingMessageId(userMessages.id);

        try {
            const response = await axios.post("https://lunar-server-jz4d.onrender.com/api/luna", {
                message: input,
            });
            const lunaMessage = { text: response.data.reply, sender: "luna", id: Date.now() };
            setMessages((prev) => [...prev, lunaMessage]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingMessageId(null);
        }
    };

    return (
        <>
            <div className="container mx-auto px-3 md:px-14 py-16 lg:p-16 bg-white">
                <div className="chat-window">
                    {messages.map((msg) => (
                        <Message
                            key={msg.id}
                            message={msg}
                            isLoading={loadingMessageId === msg.id && msg.sender === "luna"}
                        />
                    ))}
                    {loadingMessageId && (
                        <Message
                            key={loadingMessageId}
                            message={{ text: "Loading...", sender: "luna", id: loadingMessageId }}
                            isLoading={true}
                        />
                    )}
                </div>
                <div className="fixed bottom-0 left-1/2 translate-y-0 -translate-x-1/2 w-full  bg-white p-4">
                    <div className="flex justify-center items-center w-full mx-auto">
                        <input
                            className="border-none focus:outline-none w-full px-4 py-2 bg-gray-100 rounded-full md:w-3/4 lg:w-2/4"
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Type your message..."
                        />
                        <button
                            className="ml-4 border border-pink-100 bg-gradient-to-t from-startG to-endG2 text-white px-4 py-2 rounded-full"
                            onClick={sendMessage}
                        >
                            <img src={Send} alt="send" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chatbot;
