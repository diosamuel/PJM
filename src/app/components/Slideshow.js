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

const videoTiktok = [
  'https://www.tiktok.com/@pardijayamotor/video/7329809573051698438',
  'https://www.tiktok.com/@pardijayamotor/video/7244235850706324742',
  'https://www.tiktok.com/@pardijayamotor/video/7329809573051698438',
  'https://www.tiktok.com/@pardijayamotor/video/7244235850706324742',
  'https://www.tiktok.com/@pardijayamotor/video/7329809573051698438',
  'https://www.tiktok.com/@pardijayamotor/video/7244235850706324742',
  'https://www.tiktok.com/@pardijayamotor/video/7329809573051698438',
];

const Slideshow = ({type}) => {
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
  <>
    {type === "tiktok" ? (
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={slidePerview}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {videoTiktok.map((tiktok, idx) => (
          <SwiperSlide key={idx}>
            <blockquote
              cite={tiktok}
              data-video-id={tiktok.match(/video\/(\d+)/)?.[1] || null}
              className="tiktok-embed w-32"
            >
              <section></section>
            </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>
    ) : (
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
          <SwiperSlide key={idx}>
            <img
              src={image}
              alt={`Slide ${idx}`}
              className="w-72 h-72 object-cover content-center rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    )}
  </>
);

};

export default Slideshow;
