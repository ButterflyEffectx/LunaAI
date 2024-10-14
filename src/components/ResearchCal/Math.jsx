import React from 'react';
import integrals from '../images/integrals.png';
import matrix from '../images/matrix.png';
import limit from '../images/limit.png';
import diff from '../images/diff.png';

function Maths() {
  return (
    <>
      <div className='w-4/5 mx-auto'>
        <h1 className='text-white text-center py-3 md:text-2xl lg:text-3xl font-bold tracking-widest'>
          Solve a physics problem.
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white'>
          <div>
            <img className='w-full h-auto object-cover' src={matrix} alt='Matrix' />
            <h3 className='text-xl font-bold py-2'>Matrix</h3>
          </div>
          <div>
            <img className='w-full h-auto object-cover' src={limit} alt='Limit' />
            <h3 className='text-xl font-bold py-2'>Limit</h3>
          </div>
          <div>
            <img className='w-full h-auto object-cover' src={diff} alt='Differentiation' />
            <h3 className='text-xl font-bold py-2'>Diff</h3>
          </div>
          <div>
            <img className='w-full h-auto object-cover' src={integrals} alt='Integrals' />
            <h3 className='text-xl font-bold py-2'>Integrals</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maths;