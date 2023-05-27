import { useEffect, memo, useState } from "react";
import { useRouter } from "next/router";
import Button from "../../components/Button/Button";
import styles from "../../styles/thank-you.module.scss";
import Link from "next/link";

const ThankYou = () => {
  const router = useRouter();
  const [redirectTime, setRedirectTime] = useState();
  useEffect(() => {
    let timeOut,
      timeToRoute = 10000;
    timeOut = setInterval(() => {
      if (timeToRoute - 1000 >= 0) {
        timeToRoute = timeToRoute - 1000;
        setRedirectTime(timeToRoute / 1000);
      } else {
        router.back();
      }
    }, 1000);
    return () => {
      clearInterval(timeOut);
    };
  }, []);
  return (
    <div className={styles.thankyouWrapper}>
      <img
        className={styles.WhyChooseUsSingleImg}
        src={`/assets/images/whyChooseUs/WCU2.svg`}
        alt={"thanks"}
      />
      <h1 className={styles.thanksText}>Thank You!</h1>
      <div>Our Experts will get back to you soon</div>
      <div style={{ color: "red", fontSize: "0.85rem", padding: "1rem" }}>
        Page will redirect in {redirectTime} seconds
      </div>
      <div className={styles.backElement}>
        <Link href="/">
          <Button customClass={styles.backButton}>
            <span style={{ fontSize: "1rem", marginRight: "0.5rem" }}>←</span>{" "}
            Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default memo(ThankYou);
