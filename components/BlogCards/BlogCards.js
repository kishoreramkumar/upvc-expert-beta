import { useState } from "react";
import styles from "./BlogCards.module.scss";
import BlogCard from "./BlogCard/BlogCard";
import Pager from "../Pager/Pager";
import usePagination from "../../hooks/usePagination";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";

const BlogCards = ({ blogsList, blogPerPageSize, categoryPath }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const blogRef = useRef();

  const pagination = usePagination({
    count: blogsList.length,
    page: currentPage,
    rowsPerPage: blogPerPageSize,
    rowsPerPageOptions: [12, 30, 50],
  });

  const onNavigation = (type) => {
    if (type === "prev") {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } else if (type === "next") {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(Number(type));
    }
    blogRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [router.asPath]);

  return (
    <div>
      <div className={styles.blogPathContainer}>
        <span
          className={styles.blogPathLink}
          onClick={() => router.push("/blogs")}
        >
          Blogs
        </span>
        <span> {">"} {categoryPath || ""}</span>
      </div>
      <div className={styles.pagerWrapper} ref={blogRef}>
        <Pager
          isNext={pagination.showNext}
          isPrev={pagination.showPrevious}
          pages={pagination.pages}
          onNavigation={onNavigation}
          currentPage={currentPage}
        />
      </div>
      {blogsList.map((item, index) => {
        return (
          <div
            key={index}
            className={
              (currentPage - 1) * blogPerPageSize + 1 <= index + 1 &&
              index + 1 <= (currentPage - 1) * blogPerPageSize + blogPerPageSize
                ? styles.activeBlogCards
                : styles.inActiveBlogCards
            }
          >
            <BlogCard {...item} key={index} />
            <div className={styles.blogCardBottomLine} />
          </div>
        );
      })}
      <div className={styles.pagerWrapper}>
        <Pager
          isNext={pagination.showNext}
          isPrev={pagination.showPrevious}
          pages={pagination.pages}
          onNavigation={onNavigation}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default BlogCards;
