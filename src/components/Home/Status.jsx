import React from 'react'
import kis from '../icons/kis.svg'
import strong from '../icons/strongtgt.svg'
import tir from '../icons/tir.svg'
import bes from '../icons/besincere.svg'

function Status() {
  return (
    <>
        <div className="lg:mt-[10rem] md:mt-[12rem] p-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 text-white justify-center items-center mx-auto max-w-screen-lg w-full ">
                    <div className="flex flex-col">
                        <h1 className='text-4xl md:text-5xl md:font-extrabold'>Our company values
                        culture<span className='text-2xl md:text-4xl'>💖</span></h1>
                        <h3 className='text-xl pt-4 md:text-3xl'>We specialize in creating visual identities for products and branda in your company.</h3>

                    </div>
                    <div className="grid grid-cols-2 grid-rows-2  w-fit justify-center md:justify-self-end gap-5 lg:gap-16 items-center mb-6">
                        <div className="flex flex-col  items-center justify-center  text-center">
                            <img src={bes} alt="" className='w-[100px] h-[100px]'/>
                            <p className='text-base md:text-2xl'>Be Sincere</p>
                        </div>
                        <div className="flex flex-col items-center justify-center  text-center">
                            <img src={strong} alt="" className='w-[100px] h-[100px]'/>
                            <p className='text-base md:text-2xl'>Strong tgt</p>
                        </div>
                        <div className="flex flex-col  items-center justify-center text-center">
                            <img src={kis} alt="" className='w-[100px] h-[100px] '/>
                            <p className='text-base md:text-2xl'>Keep it simple</p>
                        </div>
                        <div className="flex flex-col items-center justify-center  text-center">
                            <img src={tir} alt="" className='w-[100px] h-[100px]'/>
                            <p className='text-base md:text-2xl'>Take intelligent</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Status