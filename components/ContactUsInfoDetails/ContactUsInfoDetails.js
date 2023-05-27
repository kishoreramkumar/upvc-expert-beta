import Link from "next/link";
import styles from "./ContactUsInfoDetails.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";

const ContactUsInfoDetails = (props) => (
  <div className={styles.ContactUsInfoDetailsContainer}>
    <div className={styles.ContactUsInfoCardBlock}>
      {props.contactUsInfoDetails.map((item, index) => {
        return (
          <div className={styles.ContactUsInfoSingleCard} key={index}>
            <img className={styles.ContactUsInfoSingleImg} src={item.imgLink} />
            <div className={styles.ContactUsInfoLabelBlock}>
              <span className={styles.ContactUsInfoTitleLabel}>
                <h4 className="inherit">{item.title}</h4>
              </span>
              <span className={styles.ContactUsInfoSubTitleLabel}>
                {item.subTitle.map((item, index) => {
                  return (
                    <a
                      key={index}
                      className={styles.FooterSectionLabel}
                      href={item.path}
                    >
                      <div dangerouslySetInnerHTML={{ __html: item.label }} />
                    </a>
                  );
                })}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default ContactUsInfoDetails;
