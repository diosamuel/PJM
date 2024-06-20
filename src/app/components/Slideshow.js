// src/Slideshow.jsx
import React, { useEffect, useRef, useState } from 'react';

const images = [
  '/assets/produk.jpg',
  '/assets/produk.jpg',
  '/assets/produk.jpg',
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 3000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="relative mx-auto overflow-hidden max-w-2xl rounded">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, idx) => (
          <div className="flex-shrink-0 w-full object-cover" key={idx}>
            <img
              src={image}
              alt={`Slide ${idx}`}
              className="w-full h-[15em] md:h-[20em] object-cover content-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
