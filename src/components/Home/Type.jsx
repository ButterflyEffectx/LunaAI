import React from 'react';
import Typewriter from 'react-typewriter-effect';

const TypingAnimation = () => {
    return (
        <div className="flex space-x-2 text-4xl md:text-6xl text-center font-bold text-white justify-center items-center md:justify-start md:items-start">
            <div className="">Luna </div>
            <Typewriter
                textStyle={{ fontSize: '', color: '#C824EC' }}
                startDelay={1000}
                cursorColor="#ffffff"
                multiText={['Chatbot', 'Touchpad', 'Sound']}
                multiTextDelay={1000}
                typeSpeed={100}
                multiTextLoop={true}
  
            />
        </div>
    );
};

export default TypingAnimation;
