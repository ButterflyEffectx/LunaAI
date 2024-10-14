import React from 'react'
import Carousel from './Carousel'

function Header() {
  return (
    <>
        <div className="py-12 w-full text-white">
            <div className="container mx-auto ">
                <div className="">
                    <div className="text-center text-4xl font-extrabold py-6">
                        <h1>Our Products</h1>
                    </div>
                    <Carousel/>
                    <div className="text-center py-8 lg:py-16">
                        <h1 className='text-4xl font-bold'>Lorem Ipsum</h1>
                        <div className="pt-3 lg:pt-5 px-8 lg:px-[10rem] lg:text-2xl text-gray-500">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header