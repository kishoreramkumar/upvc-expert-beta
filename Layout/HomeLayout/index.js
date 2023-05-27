import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";

import Header from "../../components/Header";
import WhatsAppChat from "../../components/WhatsAppChat/WhatsAppChat";

import styles from "./index.module.scss";

const HomeLayout = (props) => {
  const appTitle = `Sqft.Expert`;

  return (
    <div className={styles.Layout}>
      {/* <TopBar></TopBar> */}
      <Header appTitle={appTitle} />
      <div className={styles.wrapper}>
        <div className={styles.Content}>{props.children}</div>
        <BottomNavBar />
        <WhatsAppChat />
      </div>
    </div>
  );
};

export default HomeLayout;
