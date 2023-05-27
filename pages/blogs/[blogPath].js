import BlogsLayout from "../../Layout/BlogsLayout/index";
import { blogListObj } from "../../constants/blogs.constant";
import BlogArticle from "../../components/BlogArticle/BlogArticle";
import { useMemo } from "react";
import CategoryList from "../../components/CategoryList/CategoryList";
import { getBaseUrl } from "../../utils";
import Head from "next/head";

const loadHtml = async (fileName) => {
  const baseUrl = getBaseUrl();
  const response = await fetch(`${baseUrl}/blogs/${fileName}`);
  let text = (await response?.text?.()) ?? "";
  const filePathArr =fileName.split("/");
  if(filePathArr.length > 1);{
    text = text.replace(/\"images\/./g,  `"${baseUrl}/blogs/${filePathArr[0]}/images/i` )
  }
  return text;
};

export default function BlogDetail(props) {
  const { categories } = useMemo(() => {
    let categories = {};
    Object.keys(blogListObj).map((path) => {
      !categories[blogListObj[path].category] &&
        (categories[blogListObj[path].category] = blogListObj[path].category);
    });
    return { categories };
  }, []);

  return (
    <BlogsLayout>
      <Head>
        {props?.blogDetails?.canonical && (
          <link rel="canonical" href={props?.blogDetails?.canonical} />
        )}
        {props?.blogDetails?.ogTags &&
          Object.keys(props?.blogDetails?.ogTags).map((ogTag) => {
            return (
              <meta
                key={ogTag}
                property={`og:${ogTag}`}
                content={props?.blogDetails?.ogTags[ogTag]}
              />
            );
          })}
      </Head>
      <BlogsLayout.LeftContainer>
        <BlogArticle currentItem={props.blogDetails} />
      </BlogsLayout.LeftContainer>
      <BlogsLayout.RightContainer>
        <CategoryList categories={categories} />
      </BlogsLayout.RightContainer>
    </BlogsLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(blogListObj).map((val) => {
      return {
        params: {
          blogPath: val,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogDetails = blogListObj[params.blogPath];

  const pageContent = await loadHtml(blogDetails.fileName);
  return { props: { blogDetails: { ...blogDetails, content: pageContent } } };
}
