import styles from "./BlogArticle.module.scss";
import Image from "next/image";

const BlogArticle = ({ currentItem }) => {
  return (
    <div className={styles.blogArticleContainer}>
      <div className={styles.blogArticleBlock}>
        <div className={styles.blogTitle}>{currentItem.title}</div>
        <div className={styles.blogDate}>{currentItem.date}</div>
        <div className={styles.blogImage}>
          <img src={currentItem.imgLink} alt={"sa"}  />
        </div>
        <div
          className={`${styles.blogContent} blog-page-content`}
          dangerouslySetInnerHTML={{ __html: currentItem.content }}
        ></div>
      </div>
    </div>
  );
};

export default BlogArticle;
