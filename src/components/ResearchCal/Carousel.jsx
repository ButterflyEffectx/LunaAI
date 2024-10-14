import React, { useState, useEffect } from 'react';
import img1 from '../images/carousel 1.jpg'
import img2 from '../images/carousel 2.jpg'
import img3 from '../images/carousel 3.jpg'

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        img1,img2,img3,
        
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
        }, 2500); 

        return () => clearInterval(interval);
    }, [currentIndex]); 

    return (
        <div className="relative w-full px-3 mb:w-3/5 lg:px-0 lg:w-4/5 mx-auto">
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