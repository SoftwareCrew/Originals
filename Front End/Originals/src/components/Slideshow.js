import React, { useState, useEffect } from 'react';
import './Slideshow.css'

const images = [

];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slideshow">
      {images.map((image, idx) => (
        <img
          key={idx}
          src={image}
          alt={`Slide ${idx}`}
          className={idx === index ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default Slideshow;
