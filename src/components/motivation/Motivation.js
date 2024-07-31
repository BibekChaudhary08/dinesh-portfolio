import React from 'react';
import Image from 'next/image';
import ScrollAnimationForMotivation from './ScrollAnimationForMotivation';

const Motivation = () => {
  return (
    <ScrollAnimationForMotivation>
      <div id="motivation" className="hero min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/motivation1-img.jpg"
            alt="Motivation Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            className="transition-opacity duration-[2000ms]"
          />
        </div>
        <div className="absolute inset-0 z-10" style={{ backgroundColor: '#2C2C2CE5' }}></div>
        <div className="absolute top-0 left-0 right-0 h-1/2 lg:h-58% z-20">
          <Image
            src="/vector-img-1.png"
            alt="Vector Image 1"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            className="transition-transform duration-[2000ms] hover:scale-110"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 lg:h-53% z-20">
          <Image
            src="/vector-img-2.png"
            alt="Vector Image 2"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            className="transition-transform duration-[2000ms] hover:scale-110"
          />
        </div>
        <div className="hero-content text-neutral-content text-center flex justify-center items-center h-full relative z-30">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold italic uppercase text-white px-4 lg:px-0 transition-opacity duration-[2000ms] hover:opacity-50">
            OBSTACLES ARE FOUND EVERYWHERE, AND IN OVERCOMING THEM WE NOURISH OURSELVES
          </h1>
        </div>
      </div>
    </ScrollAnimationForMotivation>
  );
}

export default Motivation;