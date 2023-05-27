import BlogsLayout from "../../Layout/BlogsLayout/index";
import { blogListObj, blogPerPageSize } from "../../constants/blogs.constant";
import BlogCards from "../../components/BlogCards/BlogCards";
import { useEffect, useMemo, useState } from "react";
import CategoryList from "../../components/CategoryList/CategoryList";
import { useRouter } from "next/router";

export default function Blogs() {
  const [blogsListData, setBlogsListData] = useState([]);
  const [categoryPath, setCategoryPath] = useState('');
  const router = useRouter();
  const { categories, values } = useMemo(() => {
    let categories = {},
      values = [];
    Object.keys(blogListObj).map((path) => {
      values.push(blogListObj[path]);
      !categories[blogListObj[path].category] &&
        (categories[blogListObj[path].category] = blogListObj[path].category);
    });
    return { categories, values };
  }, []);


  useEffect(()=>{
    if(window.location.hash) {
      let id = decodeURIComponent(window.location.hash.replace('#',''))
      let filterList = [...values];
      filterList = filterList.filter(item=> item.category === id)
      setBlogsListData([...filterList]);
      setCategoryPath(id);
    }
    else {
      setBlogsListData(values);
      setCategoryPath('');
    }
  },[router.asPath, values]);

  return (
    <BlogsLayout>
      <BlogsLayout.LeftContainer>
        <BlogCards categoryPath={categoryPath} blogsList={blogsListData} blogPerPageSize={blogPerPageSize}/>
      </BlogsLayout.LeftContainer>
      <BlogsLayout.RightContainer>
        <CategoryList categories={categories} />
      </BlogsLayout.RightContainer>
    </BlogsLayout>
  );
}
