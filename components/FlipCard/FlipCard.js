import Image from "next/image";
import Link from "next/link";

import styles from "./FlipCard.module.scss";
function FlipCard({ img, title, desc, path }) {
  return (
    <div className={styles.FlipCard}>
      <div className={styles.FlipCardInner}>
        <div className={styles.FlipCardFront}>
          <div className={styles.FlipCardImg}>
            <Image
              src={img || "/assets/images/flipCard/home.svg"}
              alt="Avatar"
              layout="fill"
            />
          </div>

          <h3 className="inherit">
            <div
              className={styles.FlipCardTitle}
              dangerouslySetInnerHTML={{ __html: title }}
            ></div>
          </h3>
        </div>
        <Link href={path} passHref>
          <div className={styles.FlipCardBack}>{desc}</div>
        </Link>
      </div>
    </div>
  );
}

FlipCard.defaultProps = {
  title: "Home Construction",
  desc: "Independent House/Villa Constructions with High standards and Quality material.",
  img: "",
};

export default FlipCard;
