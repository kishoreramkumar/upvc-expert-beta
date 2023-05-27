import Link from "next/link";
import { withRouter } from "next/router";
import Tooltip from "../Tooltip/Tooltip";

import styles from "./index.module.scss";
import NestedButton from "./NestedButton";

const renderNestedButtons = (btnArr) => {
  return (
    <div>
      {btnArr.map((btn, index) => {
        return <NestedButton key={index} {...btn}></NestedButton>;
      })}
    </div>
  );
};

const NavButton = ({ path, icon, label, router, arr, index }) => {
  if (arr) {
    return (
      <Tooltip message={renderNestedButtons(arr)}>
        <div
          className={`${styles.NavButton} ${
            (router.pathname === path && index === 0) && styles.active
          }`}
        >
          <span className={styles.Label}>{label} &#9660;</span>
        </div>
      </Tooltip>
    );
  }
  return (
    <Link href={path} passHref>
      <div
        className={`${styles.NavButton} ${
          router.pathname === path && styles.active
        }`}
      >
        {icon && <div className={styles.Icon}>{icon}</div>}
        <span className={styles.Label}>{label}</span>
      </div>
    </Link>
  );
};

export default withRouter(NavButton);
