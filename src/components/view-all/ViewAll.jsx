import Image from 'next/image';
import React from 'react';
import ScrollAnimationForViewAll from './ScrollAnimationForViewAll';

const ViewAll = () => {
  const viewallItems = [
    { image: '/gallery1.jpg' },
    { image: '/gallery2.jpg' },
    { image: '/gallery3.jpg' },
    { image: '/gallery4.jpg' },
    { image: '/gallery5.jpg' },
    { image: '/gallery6.jpg' },
  ];

  return (
    <ScrollAnimationForViewAll>
      <div id="view-all" className='bg-black flex flex-col'>
        <div className='mx-auto flex justify-between items-center py-6 md:py-8 md:px-8 text-white transition-transform duration-500 ease-in-out hover:scale-105' style={{ width: '85%' }}>
          <h1 className='text-3xl md:text-4xl lg:text-5xl italic font-sans font-bold uppercase'>Gallery</h1>
          <button className='w-12 md:w-24 flex p-3 gap-2 font-semibold' style={{ border: '1px solid #D9D9D9', borderRadius: '8px', fontFamily: 'DM Sans', width: '117px', height: '48px' }}>
            View All <Image src={'/arrow-right.png'} width={20} height={20} alt="arrow" />
          </button>
        </div>

        <div className='w-full py-12 text-white' style={{ backgroundColor: '#1E1E1E' }}>
          <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8'>
            {viewallItems.map((item, index) => (
              <div key={index} className='rounded-lg overflow-hidden shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105'>
                <div className='relative h-48'>
                  <Image
                    src={item.image}
                    layout='fill'
                    objectFit='cover'
                    alt={`Gallery Image ${index + 1}`}
                    className='rounded-lg'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimationForViewAll>
  );
};

export default ViewAll;
