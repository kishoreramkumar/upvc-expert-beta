import { useState } from "react";
import Accordian from "../Accordian/Accordian.index";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./FAQ.module.scss";

export default function FAQ({ data, title }) {
  const [noOfItem, setNoOfItem] = useState(3);
  data.questions;
  return (
    <div className={styles.faqWrapper}>
      <SectionTitle title={title} />
      <div className={styles.faqAccordianWrapper}>
        <Accordian data={data.questions.slice(0, noOfItem)} />
        <div style={{ display: "none" }}>
          <Accordian
            data={data.questions.slice(noOfItem, data.questions.length)}
          />
        </div>
      </div>
      {data.questions.length > noOfItem && (
        <div
          className={styles.showMore}
          onClick={() => {
            setNoOfItem(noOfItem + 3);
          }}
        >
          + More
        </div>
      )}
    </div>
  );
}
