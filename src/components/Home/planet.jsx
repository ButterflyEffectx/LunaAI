import React from 'react';
import planet1 from '../icons/planet1.png';
import planet2 from '../icons/planet2.png';

function Planet() {
    return (
        <>
            <div className="relative overflow-hidden px-4 lg:px-16 lg:py-56">
                <div className="container mx-auto">
                    <div className="hidden lg:block absolute top-80 left-0 w-1/3 z-30">
                        <img src={planet1} alt="" />
                    </div>
                    <div className=" rounded-t-full lg:rounded-full ">

                        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 ">
                            <div className="bg-[url('https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center rounded-tr-full rounded-tl-full lg:rounded-tr-none lg:rounded-tl-full lg:rounded-bl-full relative">
                                <div className="absolute inset-0 bg-black opacity-40 lg:rounded-tl-full lg:rounded-bl-full"></div> {/* Layer for background opacity */}
                                <div className="text-white md:text-center lg:text-start h-full w-full p-16 space-y-4 relative z-10"> {/* Relative position to ensure it stays above the overlay */}
                                    <h1 className='text-4xl font-extrabold'>Explore product in <br className='hidden md:block' />
                                        new way 👉🏻</h1>
                                    <h3 className='text-xl '>We specialize in creating visual identities for <br /> products and branda in your company.</h3>
                                    <div className="flex flex-col md:flex-row md:justify-center md:items-center lg:justify-start lg:items-start md:space-x-5 z-50">
                                        <input type="email" placeholder='Your Email' className='drop-shadow-2xl text-black font-bold px-4 py-2 lg:w-1/2 rounded-xl outline-none focus:ring-0 focus:border-transparent z-50' />
                                        <button className='mt-3 md:mt-0 drop-shadow-2xl font-bold bg-gradient-to-br from-btnS to-btnG py-3 px-4 md:py-2 md:px-6 rounded-xl'>Start ↗</button>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:block  absolute top-20 right-0 w-1/5 z-1">
                                <img src={planet2} alt="" />
                            </div>
                            <div className="relative p-16 bg-[url('https://images.unsplash.com/photo-1581937019650-bb34507b7d64?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full h-full bg-cover bg-center lg:opacity-40 lg:z-20 rounded-br-2xl rounded-bl-2xl lg:rounded-tr-full lg:rounded-br-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Planet;
