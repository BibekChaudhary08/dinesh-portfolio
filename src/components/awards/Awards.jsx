import Image from 'next/image';
import React from 'react';
import ScrollAnimationForAwards from './ScrollAnimationForAwards';

const awardItems = [
  {
    date: 'January 1st, 2021',
    title: 'Guinness World Record',
    description: 'Most full twist backflips in one minute',
    image: '/awards.jpg',
  },
  {
    date: 'February 15th, 2022',
    title: 'Guinness World Record',
    description: 'Most full twist backflips in one minute',
    image: '/awards1.jpg',
  },
  {
    date: 'March 10th, 2023',
    title: 'Guinness World Record',
    description: 'Most full twist backflips in one minute',
    image: '/awards2.jpg',
  },
  {
    date: 'April 5th, 2024',
    title: 'Guinness World Record',
    description: 'Most full twist backflips in one minute',
    image: '/awards3.jpg',
  },
  {
    date: 'May 20th, 2025',
    title: 'Guinness World Record',
    description: 'Most full twist backflips in one minute',
    image: '/awards4.jpg',
  },
  {
    date: 'June 15th, 2026',
    title: 'Guinness World Record',
    description: 'Most full twist backflips in one minute',
    image: '/awards5.jpg',
  },
];

const Awards = () => {
  return (
    <ScrollAnimationForAwards>
      <div id="awards" className='bg-black flex flex-col'>
        <div className='flex justify-center items-center py-6 md:py-8 md:px-8 transition-transform duration-500 ease-in-out hover:scale-105'>
          <h1 className='text-3xl lg:text-5xl md:text-4xl italic font-sans font-bold text-white uppercase'>Awards</h1>
        </div>

        <div className='w-full py-12 text-white' style={{ backgroundColor: '#1E1E1E' }}>
          <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8'>
            {awardItems.map((item, index) => (
              <div key={index} className='rounded-lg overflow-hidden shadow-lg'>
                <div className='relative w-full h-48 transition-transform duration-500 ease-in-out transform hover:scale-105'>
                  <Image 
                    src={item.image} 
                    layout='fill' 
                    objectFit='cover' 
                    alt={`Award Image ${index + 1}`} 
                    className='rounded-lg'
                  />
                </div>
                <div className='p-4 uppercase'>
                  <p className='text-xs' style={{color: '#A7A7A7'}}>{item.date}</p>
                  <h3 className='awards-underline text-sm font-bold text-white pt-4'>{item.title}</h3>
                  <h3 className='text-md' style={{color: '#A7A7A7'}}>{item.description}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimationForAwards>
  );
};

export default Awards;
