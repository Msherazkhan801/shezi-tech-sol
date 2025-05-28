// src/components/BlogSection.js
import React from 'react';
import {  useParams } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';
import BlogDetail from './blogs/BlogDetail';
import BlogsContents from '../utlis/BlogData';

const BlogDetailPage = () => {
  const {id}=useParams()
  let blogData = BlogsContents.find((blog) => blog.slug === id);

  const meta = {
    title: blogData?.title,
    description: blogData?.metadescription,
    canonical: `https://www.SheziTechSolution.co/blogs/${blogData?.slug}`,
  };

  if (blogData?.hasOwnProperty("metakeywords")) {
    meta["meta"] = {
      name: {
        keywords: blogData?.metakeywords,
      },
    };
  }

  return (
    <DocumentMeta {...meta}>
      <BlogDetail />
    </DocumentMeta>
  );
};

export default BlogDetailPage;
