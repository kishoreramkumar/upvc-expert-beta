import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./ExpandAccordian.module.scss";

function ExpandAccordian({ data }) {
    const [isExpand, setExpand] = useState(false);
    return (
        (data.title ||
            data.content) && (
            <div className={styles.ExpandAccordianWrapper}>
                {data.title && <h2>{data.title}</h2>}
                <div className={styles.ExpandAccordianContent} dangerouslySetInnerHTML={{ __html: data.content }}></div>
                <div
                    className={styles.ExpandAccordianExpandContent}
                    style={{ display: isExpand ? "unset" : "none" }}
                    dangerouslySetInnerHTML={{ __html: data.expandContent }}
                ></div>
                {data.expandContent && <div
                    className={styles.ExpandAccordianShowMore}
                    onClick={() => setExpand(!isExpand)}
                >
                    {isExpand ? "- Show less" : "+ Show more"}
                </div>}
            </div>
        )
    );
}


export default ExpandAccordian;
