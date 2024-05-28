import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const images = [
    'imagess1.jpg', // Replace with your actual image paths
    'imagess2.jpg',
    'imagess3.jpg',
    // Add more image paths as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `translateX(${-index * 100}%)` }}>
        {images.map((image, idx) => (
          <img key={idx} src={image} alt={`Slide ${idx + 1}`} />
        ))}
      </div>
      <div className="text-overlay">
        <h1>Order Something Delicious Here</h1>
        <p>Diverse menu with lots of crispy and healthy foods available with the finest ingredients and flavors to make your day joyous.</p>
        <button>Menu</button>
      </div>
    </div>
  );
};

export default Carousel;
