'use client';
import React, { useEffect, useState } from 'react';

const ScrollAnimationForFooter = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerSection = document.getElementById('footer');
      if (footerSection) {
        const topOffset = footerSection.getBoundingClientRect().top;
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
    <div className={`transition-transform duration-[2000ms] ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
      {children}
    </div>
  );
};

export default ScrollAnimationForFooter;
