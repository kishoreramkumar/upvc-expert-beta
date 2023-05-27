import styles from "./CategoryList.module.scss";
import { useRouter } from "next/router";

const CategoryList = ({ categories }) => {
  const router = useRouter();
  return (
    <div className={styles.categoryContainer}>
          <div className={styles.categoryLabel}>Categories</div>
          <div className={styles.categoryBlock}>
              {
                Object.values(categories).map((item,index)=>{
                  return (
                    <div onClick={()=> router.push(`/blogs#${item}`)} key={index} className={styles.categoryChip}>{item}</div>
                  )
                })
              }
          </div>
        </div>
  );
};

export default CategoryList;
