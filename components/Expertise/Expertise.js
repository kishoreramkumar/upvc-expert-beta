import styles from "./Expertise.module.scss";
import FlipCard from "../FlipCard/FlipCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import { expertiseCardConstant } from "../../constants/constants";

const Expertise = (props) => (
  <div className={styles.expertiseContainer}>
    <SectionTitle title={"Sqft.Expert Expertise"} type="h2" />
    <div className={styles.ExpertiseWrapper}>
      <div className={styles.ExpertiseList}>
        {expertiseCardConstant.map((flipItem, index) => {
          return (
            <div key={"expertise" + index}>
              <FlipCard {...flipItem} />
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default Expertise;
