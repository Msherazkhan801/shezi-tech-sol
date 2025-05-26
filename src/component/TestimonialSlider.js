// src/components/TestimonialSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Image1 from '../assets/images/testi-2.jpg';
import Image2 from '../assets/images/testi-2.jpg';
import Image3 from '../assets/images/testi-2.jpg';

const testimonials = [
  {
    name: 'Abdullah Riju',
    role: 'Developer',
    image: Image1,
    text: `Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and built by the very best!`,
  },
  {
    name: 'Kyle Frederick',
    role: 'Developer',
    image: Image2,
    text: `Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and built by the very best!`,
  },
  {
    name: 'Jose Carpio',
    role: 'Developer',
    image: Image3,
    text: `Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and built by the very best!`,
  },
  {
    name: 'Sara Ali',
    role: 'Developer',
    image: Image3,
    text: `Always responsive, knowledgeable, and efficient. One of the best partners we’ve worked with!`,
  },
  {
    name: 'Ayan Mirza',
    role: 'Developer',
    image: Image3,
    text: `They brought our vision to life with clarity and precision. Highly recommended.`,
  },
  {
    name: 'Ibrahim Khan',
    role: 'Developer',
    image: Image3,
    text: `Professional, prompt, and proficient – we couldn’t ask for more.`,
  },
];

const TestimonialSlider = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-red-600 font-semibold uppercase mb-3">Testimonial</p>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10">
          Checkout what people <br /> says about us!
        </h2>

        <div className="relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.swiper-custom-pagination',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 p-6 rounded-md shadow text-center h-full flex flex-col justify-between">
                  <p className="text-gray-600 mb-6">"{item.text}"</p>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                    <p className="text-sm font-semibold text-gray-500 uppercase">{item.role}</p>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full mx-auto mt-4"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Dots Below the Slider */}
          <div className="swiper-custom-pagination mt-8 flex justify-center gap-2"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
