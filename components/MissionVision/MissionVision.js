import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./MissionVision.module.scss";
import { MissionVisionConstant } from "../../constants/constants";
import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";

const MissionVision = (props) => {
  let constantObj = MissionVisionConstant[props.type];
  return (
    <div className={styles.MissionVisionWrapper}>
      <SectionTitle title={constantObj.headingLabel} />
      <div
        className={styles.MissionVisionMainTitle}
        dangerouslySetInnerHTML={{ __html: constantObj.mainTitle }}
      ></div>
      {constantObj.list.map((item, index) => {
        return (
          <div key={index} className={styles.MissionVisionListSingleBlock}>
            <h2 className={styles.MissionVisionListTitle}>{item.title}</h2>
            <div className={styles.MissionVisionListSubTitle}>
              {item.subContent}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MissionVision;
