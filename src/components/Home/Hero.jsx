import React from 'react'
import HeroIcon from '../icons/Hero.png';
import Type from './Type';

function Hero() {
    return (
        <>
            <div className="py-16 md:py-20 md:px-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
                        <div className=" md:hidden flex items-center justify-center">
                            <img src={HeroIcon} alt="icon" className='w-[250px] h-[250px]' />
                        </div>


                        <div className="text-center md:text-start">
                            <Type />
                            <div className="md:hidden w-1/2 mx-auto py-4">
                                <hr className='bg-white opacity-20 h-[0.5px]' />
                            </div>
                            <h1 className='text-4xl text-white md:text-6xl font-bold md:pt-4'>
                                Three-Products
                                AI
                            </h1>
                            <h3 className='text-gray-400 text-xl px-6 md:px-0 pt-8 md:text-2xl'>
                                With virtual technology you can see the digital world <br className='hidden md:block' />
                                feel more real and you can play the game with a new style.
                            </h3>
                            <div className="text-white py-8 font-bold text-xl md:text-2xl space-x-16  md:space-x-6">
                                <button className='bg-gradient-to-br from-btnS to-btnG py-3 px-4 md:py-4 md:px-6 rounded-xl'>Get it Now</button>
                                <button className=''>Explore Device</button>
                            </div>
                        </div>
                        <div className="hidden md:flex justify-end">
                            <img src={HeroIcon} alt="" className='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero