'use client'
import React, { useEffect, useState } from 'react';

const ScrollAnimationForEvents = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const eventsSection = document.getElementById('events');
      if (eventsSection) {
        const topOffset = eventsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(topOffset < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`transition-transform duration-1000 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
      {children}
    </div>
  );
};

export default ScrollAnimationForEvents;
