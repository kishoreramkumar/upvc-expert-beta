import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./BannerWithLabel.module.scss";
import { BannerWithLabelConstant } from "../../constants/constants";

const BannerWithLabel = (props) => {
  return (
    <div className={styles.BannerWithLabelWrapper}>
      <div className={styles.BannerWrapper}>
        <img
          className={styles.banner}
          src={BannerWithLabelConstant[props.type].coverImage}
          alt="banner"
        ></img>
        <img
          className={styles.mobileBanner}
          src={BannerWithLabelConstant[props.type].coverImage}
          alt="banner"
        ></img>
      </div>
      <div className={styles.BannerWithLabelContent}>
        <div className={styles.BannerWithLabelBlock}>
          <div className={styles.BannerWithLabelTitle}>
            {BannerWithLabelConstant[props.type].title}
          </div>
          <div className={styles.BannerWithLabelSubTitle}>
            {BannerWithLabelConstant[props.type].subTitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerWithLabel;
