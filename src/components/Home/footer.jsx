import React from 'react'
import lunaicon from '../icons/LunaAI.png'

function Footer() {
  return (
    <>
        <div className="py-24 ">
            <div className="container mx-auto">
                <div className="flex  text-white">
                    <ul className='flex space-x-5 lg:space-x-24 justify-center items-center mx-auto'>
                        <li className='cursor-pointer text-gray-400'>Home</li>
                        <li className='cursor-pointer text-gray-400'>About</li>
                        <li className=' flex items-center justify-center cursor-pointer'>
                            <img src={lunaicon} alt="" className=''/>
                        </li>
                        <li className='cursor-pointer text-gray-400'>Contact</li>
                        <li className='cursor-pointer text-gray-400'>Work</li>
                    </ul>
                </div>
            </div>
        </div>

     
    </>
)
}

export default Footer