import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogsContents from '../utlis/BlogData';
import Pagination from './pagination';

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
      <div className="max-w-7xl mx-auto text-center mb-14">
        <p className="text-gray-500 font-medium">From Blog</p>
        <h2 className="text-4xl font-extrabold text-gray-900">Specialized News</h2>
      </div>

      <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto">
        {blogsToShow.map((item, index) => (
          <div key={index} className="bg-white shadow rounded overflow-hidden border">
            <div className="relative">
              <img
                src={`/${item.thumbnail || item.src}`} // use thumbnail or fallback to src
                alt={item.title}
                className="w-full h-56 object-cover"
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
          </div>
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
