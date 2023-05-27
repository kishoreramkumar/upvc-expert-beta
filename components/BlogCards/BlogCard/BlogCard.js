import styles from "./BlogCard.module.scss";
import Image from "next/image";
import Button from "../../Button/Button";
import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/router";

const BlogCard = ({ imgLink, title, desc, category, date, url }) => {
  const router = useRouter();
  const displayDate = useMemo(() => {
    return new Date(date).toLocaleString(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      []
    );
  }, [date]);

  return (
    <div className={styles.blogSingleCardContainer}>
      <div className={styles.blogCategoryLabel} onClick={()=> router.push(`/blogs/#${category}`)}>{category}</div>
      <div className={styles.blogSingleCardImgBlock}>
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image src={imgLink} alt={"sa"} layout="fill" />
        </div>
      </div>
      <div className={styles.blogRightBlock}>
        <div>
          <div className={styles.blogTitle}>{title}</div>
          <div className={styles.blogDate}>{displayDate}</div>
          <div className={styles.blogDescription}>{desc}</div>
        </div>
        <div className={styles.footerWrapper}>
          <div className={`${styles.blogDate} ${styles.blogDateMobile}`}>
            {displayDate}
          </div>
          <Link href={`/blogs/${url}`} passHref>
            <Button customClass={styles.button}>Read More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
