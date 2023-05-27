import styles from "./index.module.scss";
import NavButton from "../NavButton";

const NavBar = (props) => (
  <div className={styles.NavBar}>
    {props.navButtons.map((button, index) => (
      <NavButton
        index={index}
        key={index}
        path={button.path}
        label={button.label}
        icon={button.icon}
        arr={button.navArr}
      />
    ))}
  </div>
);

export default NavBar;
