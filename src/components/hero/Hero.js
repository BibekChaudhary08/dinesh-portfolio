'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../button/Button';
import CarouselControls from './CarouselControls'; // Adjust the path as per your file structure

const images = [
  '/hero-img1.jpg',
  '/hero-img2.jpg',
  '/hero-img3.jpg',
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="min-h-screen text-white relative">
      {/* Carousel */}
      <div className="carousel w-full h-full relative">
        {images.map((src, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className={`carousel-item relative w-full h-screen ${
              index === currentImageIndex ? '' : 'hidden'
            }`}
          >
            <Image src={src} layout="fill" objectFit="cover" alt={`Slide ${index + 1}`} />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start">
              <div className="text-left lg:pl-48 p-8 md:p-16 w-full lg:w-1/2">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold italic uppercase">
                  DINESH SUNAR PARKOUR
                </h1>
                <p className="py-6 font-bold md:w-3/4 lg:w-3/5 w-full">
                  Dozen 18th Times World Record Holder, Pro Parkour Athletes, Gymnast, Instructor &
                  Stuntman
                </p>
                <Link href={'/'}>
                  <Button>Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* Use CarouselControls for navigation */}
        <CarouselControls
          images={images}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
        />
      </div>
    </div>
  );
};

export default Hero;
