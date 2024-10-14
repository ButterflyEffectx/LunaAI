import React from 'react';
import './Message.css';
import LunaIcon from '../icons/Luna.png'

const Message = ({ message, isLoading, }) => {
    const { text, sender } = message;

    const messageClass = sender === 'user' ? 'justify-end' : 'justify-start';
    const bubbleClass =
        sender === 'user'
            ? 'bg-gradient-to-r text-white from-endG to-endG3 font-medium text-black rounded-br-none flex justify-center items-center p-3'
            : 'font-medium text-black rounded-bl-none p-3';

    const formatMessage = (messageText) => {
        const lines = messageText.split('\n');
        let inCodeBlock = false;
        const formattedLines = [];

        lines.forEach((line, index) => {
            if (line.startsWith('```')) {
                inCodeBlock = !inCodeBlock;
                if (inCodeBlock) {
                    formattedLines.push({ type: 'code', content: '' });
                } else {
                    const lastBlock = formattedLines[formattedLines.length - 1];
                    lastBlock.content += line.replace(/```/g, '').trim();
                }
            } else if (inCodeBlock) {
                const lastBlock = formattedLines[formattedLines.length - 1];
                lastBlock.content += line.trim() + '\n';
            } else if (line.startsWith('###')) {
                const headerContent = line.replace('###', '').trim();
                formattedLines.push({ type: 'header', content: headerContent });
            } else {
                const parts = line.split(/(`.*?`)/g); // แยกข้อความด้วย backticks
                parts.forEach((part) => {
                    if (part.startsWith('`') && part.endsWith('`')) {
                        formattedLines.push({ type: 'highlight', content: part.replace(/`/g, '').trim() }); 
                    } else {
                        formattedLines.push({ type: 'text', content: part });
                    }
                });
            }
        });

        return formattedLines.map((line, index) => {
            if (line.type === 'code') {
                return (
                    <pre key={index} className="bg-gray-200 w-full p-3 rounded-md whitespace-pre-wrap break-words overflow-hidden">
                        <code>{line.content}</code>
                    </pre>
                );
            } else if (line.type === 'header') {
                return (
                    <h3 key={index} className="text-[13px] lg:text-xl font-bold">
                        {line.content}
                    </h3>
                );
            } else if (line.type === 'highlight') {
                return (
                    <span key={index} className="bg-yellow-300 font-mono px-1 rounded">
                        {line.content}
                    </span>
                );
            } else {
                return (
                    <span key={index}>
                        {line.content}
                        <br />
                    </span>
                );
            }
        });
    };

    return (
        <div className="container mx-auto lg:max-w-[750px] lg:p-4 bg-white">
            <div className={`flex w-full my-2 ${messageClass}`}>
                <div className="flex items-start justify-start ">
                    {sender === 'user' ? (
                        <img src='https://www.vectorstock.com/royalty-free-vector/flat-business-man-user-profile-avatar-icon-vector-4333097' alt="User Icon" className="hidden w-8 h-8 mr-2 rounded-full" />
                    ) : (
                        <img src={LunaIcon} alt="Luna Icon" className="w-9 h-9 mr-2 rounded-full" />
                    )}
                </div>
                <div className={`max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-md rounded-lg ${bubbleClass} break-words text-[13px] md:text-lg lg:text-xl`}>
                    {isLoading ? (
                        <span>Luna is typing...</span>
                    ) : (
                        <span className="block whitespace-pre-wrap">
                            {formatMessage(text)}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Message;
