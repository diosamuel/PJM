// src/Slideshow.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const images = [
  '/assets/orang-angkat-bak.jpg',
  '/assets/orang-ngeliatin-bak.jpg',
  '/assets/orang-naik-bak.jpg',
  '/assets/orang-naik-bak.jpg',
  '/assets/orang-naik-bak.jpg',
];

const Slideshow = () => {
  // const [index, setIndex] = useState(0);
  // const timeoutRef = useRef(null);

  // const delay = 3000;

  // const resetTimeout = () => {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // };

  // useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       setIndex((prevIndex) =>
  //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     delay
  //   );

  //   return () => {
  //     resetTimeout();
  //   };
  // }, [index]);
  const [slidePerview, setSlidePerview] = useState(3);

  const changeSlidesPerView = (option) => {
    setSlidePerview(option);
  };
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 750) {
        setSlidePerview(1);
      } else if (window.innerWidth < 1080) {
        setSlidePerview(3);
      } else {
        setSlidePerview(5);
      }
    };
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <Swiper
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      slidesPerView={slidePerview}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Navigation, Pagination]}
    >
      {images.map((image, idx) => (
        <SwiperSlide>
          <img
            src={image}
            alt={`Slide ${idx}`}
            className="w-72 h-72 object-cover content-center rounded"
          />
        </SwiperSlide>
      ))}
    </Swiper>
    // <div className="relative mx-auto overflow-hidden max-w-2xl rounded">
    //   <div
    //     className="flex transition-transform duration-500 ease-in-out"
    //     style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
    //   >
    //     {images.map((image, idx) => (
    //       <div className="flex-shrink-0 w-full object-cover" key={idx}>
    //         <img
    //           src={image}
    //           alt={`Slide ${idx}`}
    //           className="w-full h-[15em] md:h-[25em] object-cover content-center"
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Slideshow;
