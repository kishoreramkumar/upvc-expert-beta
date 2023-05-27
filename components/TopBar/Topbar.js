import Image from "next/image";
import Link from "next/link";

import styles from "./Topbar.module.scss";

const TopBar = (props) => (
  <div className={styles.TopBarWrapper}>
    <div className={styles.ISOWrapper}>
      <div className={styles.ISOImageWrapper}>
        <Image src={"/assets/images/iso.png"} alt="iso" />
      </div>
      <p className={styles.ISOTitle}>An ISO 9001:2015 Certified Company</p>
    </div>
    <span className={styles.Label}></span>
  </div>
);

export default TopBar;
