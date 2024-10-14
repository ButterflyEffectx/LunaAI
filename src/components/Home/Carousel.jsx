import React, { useState, useEffect } from 'react';
import c1 from '../icons/c1.svg';
import c2 from '../icons/c2.svg';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        c1,
        c2,
        'https://plus.unsplash.com/premium_photo-1666739389069-ac398d974962?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3500); 

        return () => clearInterval(interval); 
    }, [currentIndex]); 

    return (
        <div className="relative w-full px-3 lg:px-0 lg:w-4/5 mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
                
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Carousel Image ${index + 1}`}
                            className="w-full h-56 lg:h-96 object-cover flex-shrink-0 cursor-pointer"
                        />
                    ))}
                </div>
            </div>

            
            <div className="px-5">
                <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full p-2 px-5 "
                >
                    &#10094;
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full p-2 px-5 "
                >
                    &#10095;
                </button>
            </div>

          
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 mx-1 rounded-full ${
                            currentIndex === index ? 'bg-gradient-to-br from-btnS to-btnG' : 'bg-gray-300'
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
