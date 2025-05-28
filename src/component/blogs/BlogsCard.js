import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogCard.module.css";

export default function BlogCard({ blog, addRef }) {
  return (
    <div ref={addRef} className={`col-lg-4 ${styles.blogContainer}`}>
      <Link to={`/blogs/${blog.slug}`}>
        <div className={styles.image}>
          <img
            src={`/${blog.thumbnail}`}
            alt={`${blog.altAttribute}`}
            className={styles.innerImage}
          />
        </div>
        <div className={styles.techDesc}>
          <h4>{blog.title}</h4>
          <p dangerouslySetInnerHTML={{ __html: blog.meta }}></p>
          <p className={styles.readMore}>More Detail</p>
        </div>
      </Link>
    </div>
  );
}
