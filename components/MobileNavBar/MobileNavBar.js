import styles from "./MobileNavBar.module.scss";
import MobileNavButton from "./MobileNavButton";

const MobileNavBar = (props) => (
  <div className={styles.NavBar}>
    {props.navButtons.map((button) =>
      button.navArr ? (
        button.navArr.map((btn) => (
          <MobileNavButton
            key={btn.path}
            path={btn.path}
            label={btn.label}
            icon={btn.icon}
            arr={btn.navArr}
          />
        ))
      ) : (
        <MobileNavButton
          key={button.path}
          path={button.path}
          label={button.label}
          icon={button.icon}
          arr={button.navArr}
        />
      )
    )}
  </div>
);

export default MobileNavBar;
