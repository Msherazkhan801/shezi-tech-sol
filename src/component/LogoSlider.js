// src/components/LogoSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const logos = [
  "https://www.hubspot.com/hubfs/gmail-icon-1.svg", // Apple
  "https://www.hubspot.com/hubfs/shopify-icon-1.svg", // Microsoft
  "https://www.hubspot.com/hubfs/mailchimp-icon-1.svg", // Google
  "https://www.hubspot.com/hubfs/zapier-icon-1.svg", // Amazon
  "https://cdn2.hubspot.net/hubfs/3409531/geomapper-icon-2-1.png", // Twitter
  "https://cdn2.hubspot.net/hubfs/521324/GTWLogos%201200x1200-1.png", // Twitter
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
                className="h-16 w-auto  transition duration-300 mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LogoSlider;
