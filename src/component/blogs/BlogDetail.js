import React from "react";
import styles from "./BlogDetail.module.css";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram, // 1. Import Instagram icon
} from "@fortawesome/free-brands-svg-icons";
import BlogsContents from "../../utlis/BlogData";
import RelatedBlog from "./RelatedBlog";

const BlogDetail = () => {
  const { slug } = useParams();

  let respData = BlogsContents.find((blog) => blog.slug === slug);

  const facebook = <FontAwesomeIcon icon={faFacebookF} />;
  const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />;
  const instagram = <FontAwesomeIcon icon={faInstagram} />;

  return (
    <>
      <div className={`container ${styles.blogDetailContainer}`}>
        <div className={`${styles.blogDetailCover} row`}>
          <div className={`${styles.blogColLeft} col-md-2`}>
            <div className={`${styles.authInfo}`}>
              <p className={styles.blogAuthor}>{respData?.author}</p>
              <p className={styles.blogDate}>{respData?.date}</p>
              <div className={styles.shareButtons}>
                <ul className={styles.socialIcons}>
                  
                  {/* Facebook Profile Link */}
                  <li className={styles.socialMedia}>
                    <div className={styles.facebookBtn}>
                      <a
                        href="https://web.facebook.com/sheraz.khan.891764"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {facebook}
                      </a>
                    </div>
                  </li>

                  {/* insta Profile Link */}
                  <li className={styles.socialMedia}>
                    <div className={styles.twitterBtn}>
                        <a
                        href="https://www.instagram.com/sherazkhan801/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {instagram}
                      </a>
                    </div>
                  </li>

                  {/* LinkedIn Profile Link */}
                  <li className={styles.socialMedia}>
                    <div className={styles.linkedinBtn}>
                      <a
                        href="https://www.linkedin.com/in/sheraz-khan-343339160/" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {linkedin}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${styles.blogColRight} col-md-10`}>
            <h1 className={styles.blogTitle}>{respData?.title}</h1>
            <img
              src={`/${respData?.src}`}
              alt={`${respData?.alt}"`}
              className={styles?.blogImage}
            ></img>
            <p
              className={styles.blogDesc}
              dangerouslySetInnerHTML={{ __html: respData?.description }}
            ></p>
            <div className={styles.blogDetails}>
              {respData?.arr?.map((blog, index) => {
                return (
                  <div className={styles.blogContentInner} key={index}>
                    {blog.heading && (
                      <h2 className={styles.blogHeading} id={blog.s_id}>
                        {blog.heading}
                      </h2>
                    )}
                    {blog.headings && (
                      <h4 className={styles.blogHeading}>{blog.headings}</h4>
                    )}
                    {blog.desc1 && (
                      <p
                        className={styles.blogContent}
                        dangerouslySetInnerHTML={{ __html: blog.desc1 }}
                      ></p>
                    )}
                    {blog.image1 && (
                      <img
                        src={`/${blog.image1}`}
                        alt={`${blog.alt}`}
                        className={styles.blogImage}
                      ></img>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <RelatedBlog related={respData?.related} />
      </div>
    </>
  );
};

export default BlogDetail;