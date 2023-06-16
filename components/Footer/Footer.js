import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Footer.module.scss";
import { footerDetails } from "../../constants/constants";
import Image from "next/image";

const Footer = () => {
  const footerConstant = footerDetails(process.env.mobileNo);
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterWithCompanyLabelBlock}>
        <div
          style={{
            background: "white",
            height: "2.5rem",
            width: "14rem",
            position: "relative",
          }}
        >
          <Image src={"/assets/images/common/logo.jpg"} alt="logo" layout="fill" />
        </div>
        <div className={styles.FooterWithCompanyCopyRights}>
          Copyright - 2023 upvc.expert.
        </div>
      </div>
      <div className={styles.FooterWithQuickLinks}>
        <div className={styles.FooterSectionTitle}>Quick Links</div>
        <div className={styles.FooterWithQuickLinksBlock}>
          {footerConstant.quickLinks.map((item, index) => {
            return (
              <a
                key={index}
                className={styles.FooterSectionLabel}
                href={item.path}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
      <div className={styles.FooterWithContactUs}>
        <div className={styles.FooterSectionTitle}>Contact Us</div>
        <div className={styles.FooterWithContactUsBlock}>
          {footerConstant.contactUs.map((item, index) => {
            return (
              <a
                key={index}
                className={styles.FooterSectionLabel}
                href={item.path}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
      <div className={styles.FooterWithImpLinks}>
        <div className={styles.FooterSectionTitle}>Important Links</div>
        <div className={styles.FooterWithImpLinksBlock}>
          {footerConstant.ImpLinks.map((item, index) => {
            return (
              <a
                key={index}
                className={styles.FooterSectionLabel}
                href={item.path}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
