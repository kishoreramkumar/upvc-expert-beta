import Head from "next/head";
import BannerWithLabel from "../../components/BannerWithLabel/BannerWithLabel";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import WhatsAppChat from "../../components/WhatsAppChat/WhatsAppChat";
import styles from "./index.module.scss";

const AboutUsContactUs = (props) => {
  const appTitle = `Sqft Expert`;

  return (
    <div className={styles.Layout}>
      <Head>
        <title>sqft.expert</title>
        <link rel="icon" href="/NewLogosqftexpert.png" />
      </Head>
      {/* <TopBar></TopBar> */}
      <Header appTitle={appTitle} />
      <div className={styles.Content}>
          <BannerWithLabel type={props.type}/>
          {props.children}
          <Footer/>
        </div>
      <BottomNavBar />
      <WhatsAppChat />
    </div>
  );
};

export default AboutUsContactUs;
