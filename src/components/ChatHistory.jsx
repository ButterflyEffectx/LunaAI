import React, { useState } from 'react';
import dot from '../icons/dot.png';

const ChatHistory = ({ showChatHistory, messages, deleteMessage }) => {
    const [dropdownIndex, setDropdownIndex] = useState(null); 

    const toggleDropdown = (index) => {
        setDropdownIndex(dropdownIndex === index ? null : index); 
    };

    return (
        <div
            className={`fixed top-0 left-0 w-[400px] lg:w-[400px] h-[calc(100vh)] bg-gradient-to-b from-startG to-white p-3 rounded-tr-3xl shadow-lg z-10 transition-transform duration-300 transform ${
                showChatHistory ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <div className="flex flex-col items-center mx-auto mt-4 w-full"> 
                {messages.map((message, index) => (
                    <div key={index} className="ml-[1rem] lg:ml-[4rem] p-2 bg-gradient-to-r text-white from-endG to-endG3 rounded-full shadow-md mb-2 w-full max-w-[300px] flex justify-between items-center"> 
                        <span className='text-[12px] lg:text-base text-center'>{message}</span>
                        <div className="relative">
                            <img 
                                src={dot} 
                                alt="dot" 
                                className='cursor-pointer mx-2'
                                onClick={() => toggleDropdown(index)} 
                            />
                            {/* Drop-down menu */}
                            {dropdownIndex === index && (
                                <div className="absolute right-0 lg:left-0 mt-2 w-40 bg-white rounded shadow-lg z-50">
                                    <button 
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 w-full text-left"
                                        onClick={() => deleteMessage(index)} 
                                    >
                                        Delete
                                    </button>
                                    <button 
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 w-full text-left"
                                        onClick={() => console.log('Edit clicked')} 
                                    >
                                        Edit
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatHistory;
