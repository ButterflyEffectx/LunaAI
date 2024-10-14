import React from 'react';
import member from '../icons/Member.svg';

function Member() {
    return (
        <div className="">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center px-4 md:px-0">
                    <img src={member} alt="member" />
                    <div className="mt-2 bg-gradient-to-t from-[rgba(200,36,236,0.7)] to-black  lg:w-2/3 p-4 lg:pt-16 lg:px-16 lg:pb-3 rounded-xl">
                        <h1 className='text-center text-4xl font-extrabold text-white'>Our Member</h1>
                        <p className="text-center text-xl lg:text-2xl font-semibold text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor <br />
                            pellentesque nisi, non faucibus neque consectetur vel.
                        </p>
                        <div className="pt-10 lg:pt-12">
                            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-3">
                                <div className="py-4 text-center bg-gradient-to-t from-cardnameS  to-cardnameE rounded-2xl">
                                    <h1 className='text-white text-xl font-bold'>Tanawat Srilakham</h1>
                                    <p className='text-amber-400 text-lg font-bold'>6604101332</p>
                                </div>
                                <div className="py-4 text-center bg-gradient-to-t from-cardnameS  to-cardnameE rounded-2xl">
                                    <h1 className='text-white text-xl font-bold'>Panat Boonlao</h1>
                                    <p className='text-amber-400 text-lg font-bold'>6604101350</p>
                                </div>
                                <div className="py-4 text-center bg-gradient-to-t from-cardnameS  to-cardnameE rounded-2xl">
                                    <h1 className='text-white text-xl font-bold'>Peeratat Khenpha</h1>
                                    <p className='text-amber-400 text-lg font-bold'>6604101359</p>
                                </div>
                                <div className="py-4 text-center bg-gradient-to-t from-cardnameS  to-cardnameE rounded-2xl">
                                    <h1 className='text-white text-xl font-bold'>Peeraphat Micranuch</h1>
                                    <p className='text-amber-400 text-lg font-bold'>6604101361</p>
                                </div>
                                <div className="py-4 text-center bg-gradient-to-t from-cardnameS  to-cardnameE rounded-2xl">
                                    <h1 className='text-white text-xl font-bold'>Pakon lakmai</h1>
                                    <p className='text-amber-400 text-lg font-bold'>6604101364</p>
                                </div>
                                <div className="py-4 text-center bg-gradient-to-t from-cardnameS  to-cardnameE rounded-2xl">
                                    <h1 className='text-white text-xl font-bold'>Peerapat Khodkaew</h1>
                                    <p className='text-amber-400 text-lg font-bold'>6604101368</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member;
