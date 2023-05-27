import Head from "next/head";
import styles from "./index.module.scss";
import BlogCards from "../../components/BlogCards/BlogCards";
import BlogArticle from "../../components/BlogArticle/BlogArticle";
import Image from "next/image";
import Link from "next/link";
import HomeLayout from "../HomeLayout";
import Footer from "../../components/Footer/Footer";

const BlogsLayout = (props) => {
  return (
    <HomeLayout className={styles.Layout}>
      <>
        <div className={styles.BlogPageWrapper}>
          <div className={styles.BlogPageHeader}>
            <div className={styles.BlogPageBannerWrapper}>
              <div className={styles.BlogPageBanner}>
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={"/assets/images/NewLogosqftexpert.png"}
                  alt="logo"
                ></Image>
              </div>
            </div>
          </div>
          <div className={styles.Content}>{props.children}</div>
        </div>
        <Footer />
      </>
    </HomeLayout>
  );
};

const LeftContainer = (props) => {
  return <div className={styles.blogLeftBlock}>{props.children}</div>;
};

const RightContainer = (props) => {
  return <div className={styles.blogRightBlock}>{props.children}</div>;
};

BlogsLayout.LeftContainer = LeftContainer;
BlogsLayout.RightContainer = RightContainer;

export default BlogsLayout;
