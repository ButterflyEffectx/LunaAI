import React, { useState, useEffect } from 'react';
import Chatbot from './components/Chatbot';
import ChatHistory from './components/ChatHistory';
import Edit from './icons/Edit.png';
import Home from './icons/Home.png';
import Plus from './icons/Plus.png';
import Menu from './icons/Menu.png';
import Luna from './icons/Luna.png';
import Close from './icons/Close.png';
import { Link } from 'react-router-dom';
import Preloader from './components/Preloader';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showChatHistory, setShowChatHistory] = useState(false);
  const [messages, setMessages] = useState([
    "Hello, how can I help you?",
    "I'm looking for some information.",
    "Sure, what do you need?"
  ]);

  const toggleChatHistory = () => {
    setShowChatHistory((prev) => !prev);
    console.log('Hello');
  };

  const toggleShowMenu = () => {
    if (showChatHistory) {
      toggleChatHistory();
    }
    setShowMenu(!showMenu)
  }

  const deleteMessage = (index) => {
    setMessages((prevMessages) => prevMessages.filter((_, i) => i !== index));
  };

  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`app ${loading ? 'loading' : ''}`}>
        {loading && <Preloader />}
        <div className="App bg-white">
          <div className="p-3 fixed top-0 left-0 w-full bg-gradient-to-r from-endG to-startG shadow-md lg:p-3 flex justify-between items-center">
            <img src={Menu} alt="Menu" className='w-8 h-8 lg:hidden' onClick={toggleShowMenu} />
            <div className="hidden lg:block"></div>
            <h1 className='text-white text-lg lg:text-2xl font-semibold'>LunaChatbot</h1>
            <img src={Luna} alt="User" className='w-8 h-8 rounded-full cursor-pointer' />
          </div>
          <div className="hidden fixed lg:flex h-screen w-[250px] z-50">
            <div className="bg-gradient-to-b from-startG to-endG p-3 rounded-tr-3xl">
              <ul className='grid grid-cols-1 gap-y-6 justify-center items-center'>
                <li className='w-8 h-8 flex items-center justify-center lg:w-11 lg:h-11 rounded-full cursor-pointer transition-all'
                  onClick={toggleChatHistory}
                >
                  <img src={Home} alt="Home" className="" />
                </li>
                <li className='w-8 h-8 flex items-center justify-center lg:w-11 lg:h-11 rounded-full cursor-pointer transition-all'
                  onClick={() => addMessage("New message added!")}
                >
                  <img src={Plus} alt="Plus" className="" />
                </li>
                <li className='w-8 h-8 flex items-center justify-center lg:w-11 lg:h-11 rounded-full cursor-pointer transition-all'>
                  <Link to='/Calculator'><img src={Edit} alt="Edit" className="" /></Link>
                </li>
              </ul>
            </div>
          </div>
          {showMenu ? (
            <>
              <div className="fixed flex h-screen w-[250px] z-50">
                <div className="bg-gradient-to-b from-startG to-endG p-3 rounded-tr-3xl">

                  <ul className='grid grid-cols-1 gap-y-6 justify-center items-center'>
                    <li className='w-8 h-8 flex items-center justify-center lg:w-11 lg:h-11 rounded-full cursor-pointer transition-all'
                      onClick={toggleShowMenu}>
                      <img src={Close} alt="Close"
                      />
                    </li>
                    <li className='w-8 h-8 flex items-center justify-center lg:w-11 lg:h-11 rounded-full cursor-pointer transition-all'
                      onClick={toggleChatHistory}
                    >
                      <img src={Home} alt="Home" className="" />
                    </li>
                    <li className='w-8 h-8 flex items-center justify-center lg:w-11 lg:h-11 rounded-full cursor-pointer transition-all'
                      onClick={() => addMessage("New message added!")}
                    >
                      <img src={Plus} alt="Plus" className="" />
                    </li>
                    <li className='w-8 h-8 flex items-center justify-center lg:w-11 lg:h-11 rounded-full cursor-pointer transition-all'>
                      <Link to="/Calculator"><img src={Edit} alt="Edit" className="" /></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : null}

          <ChatHistory showChatHistory={showChatHistory} messages={messages} deleteMessage={deleteMessage} />
          <Chatbot />
        </div>
      </div>
    </>
  );
};

export default App;