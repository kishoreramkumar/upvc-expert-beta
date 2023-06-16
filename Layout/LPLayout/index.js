import Image from "next/image";
import Header from "../../components/Header";

import styles from "./index.module.scss";

export default function LPLayout(props) {
  return (
    <div className={styles.LPContainer}>
      <div className={styles.LPLogoWrapper}>
        <div className={styles.LPLogo}>
          <Image
            src="/assets/images/common/logo.jpg"
            alt="sqft expert"
            layout="fill"
          ></Image>
        </div>
      </div>
      <Header className={styles.LPHeaderWrapper} disabled={true} />
      {props.children}
    </div>
  );
}
