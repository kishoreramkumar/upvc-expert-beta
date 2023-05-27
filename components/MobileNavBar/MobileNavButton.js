import Link from "next/link";
import { withRouter } from "next/router";
// import Tooltip from "../Tooltip/Tooltip";

import styles from "./MobileNavBar.module.scss";

// import NestedButton from "./NestedButton";

// const renderNestedButtons = (btnArr) => {
//   return (
//     <div>
//       {btnArr.map((btn, index) => {
//         return <NestedButton key={index} {...btn}></NestedButton>;
//       })}
//     </div>
//   );
// };

const MobileNavButton = ({ path, icon, label, router, arr }) => {
  //   if (arr) {
  //     return (
  //       <Tooltip message={renderNestedButtons(arr)}>
  //         <div
  //           className={`${styles.NavButton} ${
  //             router.pathname === path && styles.active
  //           }`}
  //         >
  //           <span className={styles.Label}>{label} &#9660;</span>
  //         </div>
  //       </Tooltip>
  //     );
  //   }
  return (
    <Link href={path} passHref>
      <div
        className={`${styles.NavButton} ${
          router.pathname === path && styles.active
        }`}
      >
        <span className={styles.Label}>{label}</span>
      </div>
    </Link>
  );
};

export default withRouter(MobileNavButton);
