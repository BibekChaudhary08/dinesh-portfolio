'use client';
import React, { useEffect, useState } from 'react';

const ScrollAnimationForAwards = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const awardsSection = document.getElementById('awards');
      if (awardsSection) {
        const topOffset = awardsSection.getBoundingClientRect().top;
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
    <div className={`transition-transform duration-1000 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
      {children}
    </div>
  );
};

export default ScrollAnimationForAwards;
