import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./SeoContent.module.scss";

function ExpandAccordian({ data }) {
  const [isExpand, setExpand] = useState(false);
  return (
    data.title &&
    data.content && (
      <div className={styles.SeoContentWrapper}>
        <SectionTitle title={data.title} />
        <div className={styles.SeoContentContent} dangerouslySetInnerHTML={{__html: data.content}}></div>
        <div
          className={styles.SeoContentExpandContent}
          style={{ display: isExpand ? "unset" : "none" }}
          dangerouslySetInnerHTML={{ __html: data.expandContent }}
        ></div>
        <div
          className={styles.SeoContentShowMore}
          onClick={() => setExpand(!isExpand)}
        >
          {isExpand ? "- Show less" : "+ Show more"}
        </div>
      </div>
    )
  );
}

function SeoContent({ data }) {
  return data?.map((obj, index) => {
    if (obj?.title && obj?.content)
      return <ExpandAccordian key={index} data={obj} />;
    else {
      return null;
    }
  });
}
export default SeoContent;
