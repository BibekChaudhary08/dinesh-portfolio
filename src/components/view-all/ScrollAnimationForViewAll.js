'use client';
import React, { useEffect, useState } from 'react';

const ScrollAnimationForViewAll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const viewAllSection = document.getElementById('view-all');
      if (viewAllSection) {
        const topOffset = viewAllSection.getBoundingClientRect().top;
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
    <div className={`transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
};

export default ScrollAnimationForViewAll;
