import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogsContents from '../utlis/BlogData';
import Pagination from './pagination';
import { motion, AnimatePresence } from 'framer-motion';
import {FaBookOpen} from 'react-icons/fa';
// Helper to strip HTML tags and truncate
const truncateText = (htmlString, maxLength = 120) => {
  const div = document.createElement('div');
  div.innerHTML = htmlString;
  const text = div.textContent || div.innerText || '';
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

const BlogSection = ({ flag }) => {

  const blogsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(BlogsContents.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const blogsToShow =flag ? BlogsContents.slice(0, 3) : BlogsContents.slice(startIndex, startIndex + blogsPerPage);

  return (
    <section className="bg-white py-20 px-4">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold uppercase py-2 px-4 rounded-full mb-6 shadow-lg"
          >
            <FaBookOpen className="text-sm" />
            Latest Insights & Updates
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="blogs-heading"
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Latest Blogs in{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                2025
              </span>
              <motion.span
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto mt-4"
          >
            Stay updated with trending tech, SaaS growth hacks, academic writing tips, and professional insights.
          </motion.p>
        </motion.div>


      <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto ">
        {blogsToShow.map((item, index) => (
            <article
            key={index}
            className="bg-white shadow rounded overflow-hidden border"
            aria-label={`Blog titled ${item.title}`}
          >
            <div className="relative">
              <img
                src={`/${item.thumbnail || item.src}`} // use thumbnail or fallback to src
                alt={item.title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
             
            </div>
            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {truncateText(item.description)}
              </p>
              <Link
                to={`/blogs/${item.slug}`}
                className="text-blue-700 font-bold text-sm hover:underline"
              >
                READ MORE
              </Link>
            </div>
            </article>
        ))}
      </div>
     {!flag &&     <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />}
    </section>
  );
};

export default BlogSection;
