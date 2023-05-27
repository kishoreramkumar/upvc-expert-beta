import Link from "next/link";
import styles from "./WhyChooseUs.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";

const WhyChooseUs = ({ title = "Why Choose Sqft.Expert", whyChooseUsList }) => (
  <div className={styles.WhyChooseUsContainer}>
    <SectionTitle title={title} type="h2" />
    <div className={styles.WhyChooseUsCardBlock}>
      {whyChooseUsList.map((item, index) => {
        return (
          <div className={styles.WhyChooseUsSingleCard} key={index}>
            <img
              className={styles.WhyChooseUsSingleImg}
              src={`/assets/images/${item.imgLink}`}
              alt={item.title}
              loading="lazy"
            />
            <div className={styles.WhyChooseUsLabelBlock}>
              <span className={styles.WhyChooseUsTitleLabel}>
                <h4 className="inherit">{item.title}</h4>
              </span>
              <span className={styles.WhyChooseUsSubTitleLabel}>
                {item.subTitle}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default WhyChooseUs;
