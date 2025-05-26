// src/components/LogoSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Logo_Brooks.svg/512px-Logo_Brooks.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Sir_Miller_logo.svg/512px-Sir_Miller_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Lumber_Company_Logo.svg/512px-Lumber_Company_Logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Retro_Design_Logo.svg/512px-Retro_Design_Logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Logo27.svg/512px-Logo27.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/The_Mountains_are_Calling_Logo.svg/512px-The_Mountains_are_Calling_Logo.svg.png',
];

const LogoSlider = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={30}
          freeMode={true}
          autoplay={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-16 w-auto grayscale hover:grayscale-0 transition duration-300 mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LogoSlider;
