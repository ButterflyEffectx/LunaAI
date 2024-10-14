import { useState } from 'react';
import React from 'react';
import logo from '../icons/LunaAI.png';
import menu from '../icons/togglemenu.png';
import close from '../icons/Close.png';
import { Link } from 'react-router-dom';

function Nav() {
    const [menuMobile, setMenuMobile] = useState(false);

    const toggleMenu = () => {
        setMenuMobile(!menuMobile);
    }

    return (
        <>
            <nav className='fixed w-full mx-auto py-4 lg:py-5 md:px-10 z-50 bg-black'>
                <div className="flex justify-between items-center mx-auto px-6 md:px-0">
  
                    <div className="cursor-pointer">
                        <Link to='/'><img src={logo} alt="logo" className='' /></Link>
                    </div>

                    <ul className='hidden md:flex space-x-12 text-xl font-semibold text-white items-center justify-center'>
                        <Link to='/'><li className='cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-300 transform hover:scale-x-110 hover:bg-gradient-to-r hover:from-textS hover:to-textG hover:bg-clip-text hover:text-transparent'>Home</li></Link>
                        <Link to='/Research1'><li className='cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-300 transform hover:scale-x-110 hover:bg-gradient-to-r hover:from-textS hover:to-textG hover:bg-clip-text hover:text-transparent'>Chatbot</li></Link>
                        <Link to='/Research2'><li className='cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-300 transform hover:scale-x-110 hover:bg-gradient-to-r hover:from-textS hover:to-textG hover:bg-clip-text hover:text-transparent'>Touchpad</li></Link>
                        <Link to='/Research3'><li className='cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-300 transform hover:scale-x-110 hover:bg-gradient-to-r hover:from-textS hover:to-textG hover:bg-clip-text hover:text-transparent'>GAS</li></Link>
                    </ul>

                
                    <div className="md:hidden w-10 h-10 z-50">
                        <img
                            src={menuMobile ? close : menu} 
                            alt={menuMobile ? "close" : "menu"}
                            onClick={toggleMenu}
                            className="cursor-pointer z-50"
                        />
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`absolute top-0 left-0 w-full h-screen bg-black bg-opacity-30 backdrop-blur-md text-white transform ${menuMobile ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}
                >
                    <div className="text-center">
                        <ul className='flex flex-col space-y-6 py-10 px-6 text-xl font-semibold'>
                            <Link to='/'><li className='cursor-pointer'>Home</li></Link>
                            <Link to='/Research1'><li className='cursor-pointer'>Chatbot</li></Link>
                            <Link to='/Research2'><li className='cursor-pointer'>Touchpad</li></Link>
                            <Link to='/Research3'><li className='cursor-pointer'>GAS</li></Link>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav;
