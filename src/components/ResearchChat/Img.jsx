import React from 'react';
 
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

function Img() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-20 p-6">
      <img src={img2} alt="Image 2" className="lg:w-1/3 h-auto rounded-lg" />
      <img src={img3} alt="Image 3" className="lg:w-1/3 h-auto rounded-lg" />
    </div>
  );
}

export default Img;