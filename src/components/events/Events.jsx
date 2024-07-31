import React from 'react';
import Image from 'next/image';
import ScrollAnimationForEvents from './ScrollAnimationForEvents';

const eventItems = [
  {
    date: 'January 1st, 2021',
    title: 'PHUTURE BOOGIE ROLLER SKATING EVENT',
    description: 'Attempt to break yet another world record.',
    image: '/events1.jpg',
  },
  {
    date: 'February 15th, 2022',
    title: 'PHUTURE BOOGIE ROLLER SKATING EVENT',
    description: 'Attempt to break yet another world record.',
    image: '/events2.jpg',
  },
  {
    date: 'March 10th, 2023',
    title: 'PHUTURE BOOGIE ROLLER SKATING EVENT',
    description: 'Attempt to break yet another world record.',
    image: '/events3.jpg',
  },
];

const Events = () => {
  return (
    <ScrollAnimationForEvents>
      <div id="events" className='bg-black'>
        <div className='flex justify-center items-center py-6 md:py-8 md:px-8 hover:scale-105'>
          <h1 className='text-3xl lg:text-5xl md:text-4xl italic font-sans font-bold text-white uppercase transition-transform duration-500 ease-in-out transform hover:scale-110'>
            Events
          </h1>
        </div>

        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 py-16' style={{ backgroundColor: '#1E1E1E' }}>
          {eventItems.map((item, index) => (
            <div key={index} className='rounded-lg overflow-hidden shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105'>
              <div className='w-full bg-gray-950'>
                <Image src={item.image} alt={item.title} width={382} height={573} objectFit='cover' />
              </div>
              <div className='p-4'>
                <p className='text-sm text-gray-400'>{item.date}</p>
                <h3 className='text-md font-bold text-white py-4'>{item.title}</h3>
                <p className='text-md text-gray-400'>{item.description}</p>
                <div className='flex justify-center sm:justify-end mt-4'>
                  <button className='text-white flex items-center px-3 py-2 gap-2 font-semibold border border-gray-300 rounded-lg'>
                    View Detail
                    <Image src='/arrow-right.png' alt='Arrow Right' width={24} height={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollAnimationForEvents>
  );
};

export default Events;
