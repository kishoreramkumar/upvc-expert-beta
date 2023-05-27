import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./ConstructionServiceAd.module.scss";
import Button from "../Button/Button";
import { animateValue } from "../../utils";
import Image from "next/image";
import Modal from "../Modal/Modal";
import ContactForm from "../ContactForm/ContactForm";

function Insight({ count, name, icon, suffix }) {
  const [animatedCount, setCountValue] = useState(0);

  useEffect(() => {
    animateValue(setCountValue, animatedCount, count, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className={styles.attributeLabel}>
      <div className={styles.attributeCountWrapper}>
        <Image src={icon} alt={name} height={35} width={35}></Image>
        <div className={styles.attributeCounts}>
          {animatedCount}
          {suffix}
        </div>
      </div>

      <div className={styles.attributeCountLabel}>{name}</div>
    </div>
  );
}

const ConstructionServiceAd = ({ data, title, sideBanner }) => {
  const [isModalOpen, toogleModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && (
        <Modal>
          <ContactForm onClose={() => toogleModalOpen(false)} />
        </Modal>
      )}
      <div className={styles.ConstructionServiceContainer}>
        <div className={styles.ConstructionServiceBlock}>
          <div
            className={styles.ConstructionServiceLabel}
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>
          <div
            style={{ display: "flex", alignItems: "center", margin: "3% 0" }}
          >
            {data.map((item) => {
              return <Insight {...item} key={item.name} />;
            })}
          </div>
          <Button
            customClass={styles.button}
            onClick={() => {
              toogleModalOpen(true);
            }}
          >
            <span className={styles.buildBtnBlock}>
              {"LET'S BUILD"}
              <div className={styles.buttonArrow}>&#8594;</div>
            </span>
          </Button>
        </div>
        <img src={sideBanner} className={styles.imgBlock} alt="quality" loading="lazy"/>
      </div>
    </>
  );
};

export default ConstructionServiceAd;
