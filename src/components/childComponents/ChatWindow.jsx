import Message from "../Message";

const ChatWindow = ({ messages, isLoading }) => {
    return (
        <div className="chat-window flex flex-col-reverse overflow-y-auto p-4 h-[calc(100vh-100px)] ">
            {isLoading && (
                <div className="flex justify-center my-2 max-w-[750px]">
                    <div className="bg-gray-200 text-black rounded-lg px-4 py-2 animate-pulse max-w-[750px]">
                        Luna is typing...
                    </div>
                </div>
            )}
            {messages.map((msg, index) => (
                <Message key={index} message={msg} />
            ))}
        </div>
    );
};

export default ChatWindow;
