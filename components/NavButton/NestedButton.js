import Link from "next/link";
import { withRouter } from "next/router";
import Tooltip from "../Tooltip/Tooltip";

import styles from "./NestedButton.module.scss";

const NestedButton = ({ path, icon, label, router }) => {
  return (
    <Link href={path} passHref>
      <div
        className={`${styles.NestedButton} ${
          router.pathname === path && styles.active
        }`}
      >
        {icon && <div className={styles.Icon}>{icon}</div>}
        <span className={styles.Label}>{label}</span>
      </div>
    </Link>
  );
};

export default withRouter(NestedButton);
