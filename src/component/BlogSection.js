// src/components/BlogSection.js
import React from 'react';
import Img1 from '../assets/images/blog_1.jpg';
import Img2 from '../assets/images/blog_1.jpg';
import Img3 from '../assets/images/blog_1.jpg';

const blogs = [
  {
    image: Img1,
    category: 'INTERIOR',
    title: 'Minimalist trending in modern architecture 2019',
    description:
      'Building first evolved out dynamics between needs means available building materials attendant skills.',
  },
  {
    image: Img2,
    category: 'ARCHITECTURE',
    title: 'Terrace in the town yamazaki kentaro design workshop.',
    description:
      'Building first evolved out dynamics between needs means available building materials attendant skills.',
  },
  {
    image: Img3,
    category: 'DESIGN',
    title: 'W270 house são paulo arquitetos fabio jorge architecture.',
    description:
      'Building first evolved out dynamics between needs means available building materials attendant skills.',
  },
  {
    image: Img3,
    category: 'DESIGN',
    title: 'W270 house são paulo arquitetos fabio jorge architecture.',
    description:
      'Building first evolved out dynamics between needs means available building materials attendant skills.',
  },
  {
    image: Img3,
    category: 'DESIGN',
    title: 'W270 house são paulo arquitetos fabio jorge architecture.',
    description:
      'Building first evolved out dynamics between needs means available building materials attendant skills.',
  },
  {
    image: Img3,
    category: 'DESIGN',
    title: 'W270 house são paulo arquitetos fabio jorge architecture.',
    description:
      'Building first evolved out dynamics between needs means available building materials attendant skills.',
  },
  {
    image: Img3,
    category: 'DESIGN',
    title: 'W270 house são paulo arquitetos fabio jorge architecture.',
    description:
      'Building first evolved out dynamics between needs means available building materials attendant skills.',
  },
  {
    image: Img3,
    category: 'DESIGN',
    title: 'W270 house são paulo arquitetos fabio jorge architecture.',
    description:
      'Building first evolved out dynamics between needs means available building materials attendant skills.',
  },
];

const BlogSection = ({flag}) => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <p className="text-gray-500 font-medium">From Blog</p>
        <h2 className="text-4xl font-extrabold text-gray-900">Specialized News</h2>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {flag ? blogs.slice(0,3).map((item, index) => (
          <div key={index} className="bg-white shadow rounded overflow-hidden border">
            <div className="relative">
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
              <span className="absolute top-0 left-0 bg-blue-700 text-white text-xs font-bold px-3 py-1 uppercase">
                {item.category}
              </span>
            </div>
            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <a href="#" className="text-blue-700 font-bold text-sm hover:underline">
                READ MORE
              </a>
            </div>
          </div>
        )):
        blogs.map((item, index) => (
          <div key={index} className="bg-white shadow rounded overflow-hidden border">
            <div className="relative">
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
              <span className="absolute top-0 left-0 bg-blue-700 text-white text-xs font-bold px-3 py-1 uppercase">
                {item.category}
              </span>
            </div>
            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <a href="#" className="text-blue-700 font-bold text-sm hover:underline">
                READ MORE
              </a>
            </div>
          </div>
        ))
      }
      </div>
    </section>
  );
};

export default BlogSection;
