import React from 'react';
import Luna from '../images/Luna.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className=" text-back p-6 py-16">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="py-12 lg:py-0 lg:hidden w-full flex  justify-center items-center"><img src={Luna} alt="profile" className="w-[200px] h-[200px] rounded-full" /></div>
                    <div className="w-full  p-6">
                        <h1 className="text-6xl font-bold">Product</h1>
                        <h2 className="text-4xl mt-2">AI Chatbot</h2>
                        <p className="text-1xl mt-3">
                            ยกระดับการสื่อสารและประมวลผลข้อมูลของคุณด้วย AI Chatbot
                        </p>
                        <p className="text-1xl mt-3">
                            เปลี่ยนการสนทนาธรรมดาให้เป็นประสบการณ์ที่ราบรื่นและมีประสิทธิภาพยิ่งขึ้น
                        </p>
                        <p className="text-1xl mt-3">
                            ด้วยพลังของ AI เพิ่มความสะดวกสบายในการตอบคำถามและให้ข้อมูลทุกที่ทุกเวลา
                        </p>
                        <Link to='/Chat'><button className="w-full lg:w-1/4 mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 ${className}">
                            Get Start
                        </button></Link>
                    </div>
                    <div className="hidden lg:flex w-full  justify-center items-center"><img src={Luna} alt="profile" className="w-[300px] h-[300px] rounded-full" /></div>
                </div>
            </div>
        </header>
    );
}

export default Header;  