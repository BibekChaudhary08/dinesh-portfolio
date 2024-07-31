import Image from 'next/image';
import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const achievements = [
  {
    date: 2017,
    title: 'First Guinness World Record for the "Most full twist backflips in one minute" with 18 flips'
  },
  {
    date: 2018,
    title: 'Second Guinness World Record for the "Most backflips off a wall in one minute" with 19 flips'
  },
  {
    date: 2019,
    title: 'Third Guinness World Record for the "Most backflips in one hour" with 500 flips'
  },
  {
    date: 2020,
    title: 'Fourth Guinness World Record for the "Most backflips on a trampoline in one minute" with 50 flips'
  },
  {
    date: 2021,
    title: 'Fifth Guinness World Record for the "Most backflips in one day" with 1000 flips'
  },
];

const About = () => {
  return (
    <ScrollAnimation>
      <div id="about" className="bg-black flex flex-col text-center items-center">
        <div className="flex text-center items-center justify-center py-6 md:py-8">
          <h1 className="lg:text-5xl md:text-4xl text-3xl italic font-sans font-bold text-white uppercase transition-transform duration-500 ease-in-out transform hover:scale-105">
            ABOUT DINESH
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center px-8 md:px-16 lg:px-24 xl:px-48 py-16 md:py-24 lg:py-36 space-y-8 lg:space-y-0 lg:space-x-16 bg-[#1E1E1E]">
          <div className="flex-1 flex items-center justify-center lg:items-stretch">
            <div className="bg-[#434343] rounded-lg overflow-hidden w-80 md:w-96 h-auto lg:flex-none lg:max-w-[380px] lg:w-full">
              <Image
                className="rounded-lg shadow-2xl object-cover w-full h-full md:h-auto"
                src="/about-img.png"
                layout="intrinsic"
                width={360}
                height={512}
                alt="Dinesh Sunar"
              />
            </div>
          </div>
          <div className="text-white text-left flex-1 lg:flex lg:items-center">
            <div>
              <p className="pb-5">
                Dinesh Sunar, a Nepalese parkour athlete, holds 18 Guinness World Record and now resides in Akron, Ohio. He overcame significant challenges to become a national gymnast, stuntman, and coach. Inspired by action films, Sunar taught himself parkour and gymnastics, eventually setting multiple world records for backflips and other stunts.
              </p>
              <h3 className="pb-5 text-2xl">Records</h3>
              {achievements.map((item, index) => (
                <div key={index} className="pb-3">
                  <p>{item.date} : {item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default About;