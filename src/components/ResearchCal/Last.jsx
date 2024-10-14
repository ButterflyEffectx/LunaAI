import React from 'react';
import ai from '../images/1_yrioo_scebxsbmpvurjaza.webp';

function Last() {
  return (
    <>
      <div>
        <div className='text-white '>
          <h1 className='text-2xl text-center items-center mx-auto py-5 font-bold sm:text-xl md:text-2xl lg:text-3xl'>
            Benefits in Education and Business
          </h1>
          <img className='flex mx-auto justify-center w-4/5 h-1/2 object-cover' src={ai} alt='' />
          <div className='mt-5 text-xl w-full md:w-4/5 lg:w-4/5 mx-auto py-3 px-4'>
            <p className=''>
              Education: Students can easily learn and practice calculations through a user-friendly
              calculator equipped with a handwriting function, which enhances their understanding of
              mathematical processes. This feature allows for a clearer grasp of calculations, making
              learning more interactive and engaging.
            </p>
            <br />
            <p className=''>
              Business: For budget analysis, statistical calculations, or outcome forecasting, this
              calculator serves as an efficient tool for rapidly analyzing complex data. It
              significantly enhances the ability to process intricate figures, making it invaluable
              for data-driven decision-making in business environments.
            </p>
            <br />
            <p className='font-bold'>The Future of AI Touchpad Calculator</p>
            <p className=''>
              The development of the AI Touchpad Calculator holds potential for further advancements,
              such as integration with cloud systems or big data processing. These innovations would
              enhance its capabilities in managing even more complex datasets, making it an
              increasingly powerful tool for both educational and business applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Last;