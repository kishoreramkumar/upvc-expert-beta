import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./LPPackages.module.scss";

const LPPackages = ({ constructionPackagesData, title, selectPackage }) => {
  return (
    <div className={styles.constructionPackagesWrapper}>
      <SectionTitle title={title} />
      <div className={styles.constructionCards}>
        {constructionPackagesData?.map((el, index) => (
          <Card
            packageName={el.packageName}
            key={index}
            amt={el.amt}
            img={el.img}
            suffix={el.suffix}
            prefix={el.prefix}
            onClick={() => selectPackage(el)}
          ></Card>
        ))}
      </div>
    </div>
  );
};

const Card = ({ packageName, amt, img, onClick, suffix, prefix }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardBg}>
        <div className={styles.imgWrapper}>
          <Image src={`/assets/images/${img}`} layout="fill" alt="bg" />
        </div>
      </div>
      <div className={styles.cardContent}>
        <div>{packageName}</div>
        <div>{`${prefix} ${amt}${suffix}`}</div>
      </div>
    </div>
  );
};

export default LPPackages;
