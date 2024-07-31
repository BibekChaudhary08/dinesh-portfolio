'use client'
import React, { useEffect, useState } from 'react';

const ScrollAnimation = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const topOffset = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(topOffset < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`transition-transform duration-[2000ms] ${isVisible ? 'scale-100' : 'scale-50'}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;