import React from "react";
import styles from "./BlogDetail.module.css";
import { useParams } from "react-router-dom";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import BlogsContents from "../../utlis/BlogData";
import RelatedBlog from "./RelatedBlog";

const BlogDetail = () => {
  const { slug } = useParams();

  let respData = BlogsContents.find((blog) => blog.slug === slug);

  const twitter = <FontAwesomeIcon icon={faTwitter} />;
  const facebook = <FontAwesomeIcon icon={faFacebookF} />;
  const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />;

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
                  <li className={styles.socialMedia}>
                    <div className={styles.facebookBtn}>
                      <FacebookShareButton
                        url={`${URL}/blogs/${respData?.slug}`}
                        quote={"Some random text"}
                        hashtag="#Shezitechsolution"
                      >
                        {facebook}
                      </FacebookShareButton>
                    </div>
                  </li>
                  <li className={styles.socialMedia}>
                    <div className={styles.twitterBtn}>
                      <TwitterShareButton
                        url={`${URL}/blogs/${respData?.slug}`}
                        title={respData?.title &&respData?.title}
                      >
                        {twitter}
                      </TwitterShareButton>
                    </div>
                  </li>
                  <li className={styles.socialMedia}>
                    <div className={styles.linkedinBtn}>
                      <LinkedinShareButton
                        url={`${URL}/blogs/${respData?.slug}`}
                        title={respData?.title && respData?.title}
                      >
                        {linkedin}
                      </LinkedinShareButton>
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
        <RelatedBlog related={respData.related} />
      </div>
    </>
  );
};

export default BlogDetail;
