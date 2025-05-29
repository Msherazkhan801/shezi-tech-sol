import React from "react";
import styles from "./BlogDetail.module.css";

import BlogsContents from "../../utlis/BlogData";
import BlogCard from "./BlogsCard";

const RelatedBlog = ({ related }) => {
  return (
    <div className={`container`}>
      <div className={`mb-4 justify-content-center ${styles.titleContainer}`}>
        <strong> <u>You may also Read</u></strong>
      </div>
      <div className={`row flex justify-center gap-5`}>
        {BlogsContents.filter((item) => related.includes(item.id)).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default RelatedBlog;
