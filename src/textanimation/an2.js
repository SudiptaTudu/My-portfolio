import React, { useEffect } from 'react';
 // Import your stylesheet

const ParallaxText = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxText = document.querySelector('.parallax-text');
      const scrollPosition = window.scrollY;
      parallaxText.style.transform = `translate(${scrollPosition}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div className="parallax-text">
        Your Sideways Moving Text
      </div>
    </div>
  );
};

export default ParallaxText;
