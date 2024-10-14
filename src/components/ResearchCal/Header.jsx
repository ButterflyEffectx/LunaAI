import React from 'react';
import han from '../images/han.png';
import './App.css';
import { Link } from 'react-router-dom';

function Head() {
  return (
    <>
      <div className='flex flex-wrap justify-center items-center py-12'>
        <div className='text-white w-full lg:w-3/5 p-5 '>
          <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold'>
            Product <br /> AI Touchpad Calculator
          </h1>
          <p className='mt-5 text-lg md:text-xl text-gray-500'>
          In this rapidly advancing technological era, the AI Touchpad Calculator has transformed the traditional calculator into an intelligent tool that integrates touchpad functionality with AI. This combination enhances convenience and maximizes efficiency in every calculation, revolutionizing the way mathematical operations are performed.
          </p>
          <Link to='/Calculator'><button className='bg-gradient-to-br from-btnS to-btnG py-2 px-4 md:py-2 md:px-4 rounded-xl mt-3 w-full md:w-1/6'>
            Get Start
          </button></Link>
        </div>
        <div className='w-full lg:w-auto'>
          <img className='hidden md:block w-full h-auto' src={han} alt='AI Touchpad Calculator' />
        </div>
      </div>
    </>
  );
}

export default Head;