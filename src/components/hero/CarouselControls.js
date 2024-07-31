'use client'
import React, { useState, useEffect } from 'react';

const CarouselControls = ({ images, currentImageIndex, setCurrentImageIndex }) => {
  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Navigation arrows */}
      <div className="absolute left-5 right-5 top-1/2 flex items-center justify-between -translate-y-1/2 transform z-10">
        {/* Show arrows on laptops and larger screens */}
        <div className="hidden lg:flex">
          <button className="btn btn-circle" onClick={prevImage}>
            ❮
          </button>
        </div>
        <div className="hidden lg:flex">
          <button className="btn btn-circle" onClick={nextImage}>
            ❯
          </button>
        </div>
      </div>

      {/* Bottom navigation dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center z-10">
        {images.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => changeImage(dotIndex)}
            className={`h-2.5 w-2.5 mx-1 rounded-full bg-white ${
              currentImageIndex === dotIndex ? 'opacity-100' : 'opacity-50'
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default CarouselControls;