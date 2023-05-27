import Image from "next/image";
import { useState } from "react";
import styles from "./Accordian.module.scss";
import Arrow from "../../public/assets/images/arrow.svg";

function AccordianTile({ data }) {
  const [isOpen, setOpen] = useState(false);

  const toogleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={styles.accordianTile}>
      <div className={styles.accordianTileTitle} onClick={toogleOpen}>
        <div
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: data.title }}
        ></div>
        <div className={`${styles.arrowImg} ${isOpen && styles.open}`}>
          <Image src={Arrow} alt="arrow" layout="fill" />
        </div>
        <div className={styles.titleBg}></div>
      </div>
      <div
        className={`${styles.accordianTileDescription} ${
          isOpen && styles.accordianTileOpen
        }`}
      >
        <div
          className={styles.descriptionContent}
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
      </div>
    </div>
  );
}

function Accordian({ data = [] }) {
  return (
    <div className={styles.accordianWrapper}>
      {data.map((obj, index) => {
        return <AccordianTile data={obj} key={index} />;
      })}
    </div>
  );
}

export default Accordian;
