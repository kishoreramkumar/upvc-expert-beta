/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useEffect, useState } from "react";
import { animateValue } from "../../utils";
import Button from "../Button/Button";
import axios from "axios";

import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../../firebase";

import styles from "./LandingSection.module.scss";
import { useRouter } from "next/router";

function Insight({ count, name, icon, suffix }) {
  const [animatedCount, setCountValue] = useState(0);

  useEffect(() => {
    animateValue(setCountValue, animatedCount, count, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className={styles.attributeLabel}>
      <div className={styles.attributeCountWrapper}>
        <Image src={icon} alt={name} height={35} width={35}></Image>
        <div className={styles.attributeCounts}>
          {animatedCount}
          {suffix}
        </div>
      </div>

      <div className={styles.attributeCountLabel}>{name}</div>
    </div>
  );
}

function CompnayInstights({ landingPageConstant }) {
  return (
    <div style={{ display: "flex", alignItems: "center", zIndex: 1, order: 1 }}>
      {landingPageConstant.companyInsight.map((item) => {
        return <Insight {...item} key={item.name} />;
      })}
    </div>
  );
}

function LeftSection({ landingPageConstant, opactiy }) {
  return (
    <div className={styles.LeftSectionWrapper}>
      <h1
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: landingPageConstant.title }}
      ></h1>
      <div
        className={styles.subTitle}
        dangerouslySetInnerHTML={{ __html: landingPageConstant.description }}
      ></div>
      <CompnayInstights landingPageConstant={landingPageConstant} />
      <div className={styles.footer}>
        <GetCallback />
      </div>
      <div
        className={styles.LeftSectionBg}
        style={{ backgroundColor: `rgba(255, 255, 255, ${opactiy})` }}
      ></div>
    </div>
  );
}

function GetCallback() {
  const [mobileNo, setMobileNo] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  function handleEnter(event) {
    if (event.keyCode === 13) {
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }
  const onInputSubmit = async () => {
    if (mobileNo?.length < 10 || !mobileNo) {
      setError("Enter a 10 digit mobile number");
    } else {
      const date = new Date().toString();
      setError("");
      try {
        await addDoc(collection(firestore, `users`), {
          number: mobileNo,
          date: date,
        });

        const res = await axios.post("/api/email", {
          number: mobileNo,
          pageUrl: router?.asPath
        });
        setMobileNo("");
        setSuccess("We will reach you soon !");
        setTimeout(() => {
          setSuccess("");
        }, 3000);
        router.push("thank-you");
      } catch (e) {
        console.log(e);
        setMobileNo("");
        setError("Sometheing went wrong! Try Later");
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    }
  };

  return (
    <div className={styles.GetCallbackWrapper}>
      <div className={styles.formTitle}>Get Free Consultation</div>

      <div className={styles.InputWrapper}>
        <div className={styles.InputContainer}>
          +91{" "}
          <input
            id={"contact-us-input"}
            value={mobileNo}
            placeholder="8888888888"
            maxLength={10}
            minLength={10}
            onChange={(e) => {
              if (!isNaN(e.target.value)) {
                setError("");
                setMobileNo(e.target.value);
              } else {
                setError("Enter Valid mobile No");
              }
            }}
            onKeyDown={handleEnter}
          />
        </div>
        <Button
          onClick={onInputSubmit}
          disabled={success}
          customClass={styles.FormButton}
          disabledClass={styles.disabledButton}
        >
          Submit
        </Button>
      </div>
      <div style={{ height: "1rem" }}>
        {error && <div className={styles.error}>{error}</div>}
        {success && <div className={styles.success}>{success}</div>}
      </div>
    </div>
  );
}

function LandingSection({ data, opactiy = "0.6" }) {
  return (
    <div className={styles.LandingSectionWrapper}>
      <div className={styles.BannerWrapper}>
        <img className={styles.banner} src={data.coverImage} alt="banner"></img>
        <img
          className={styles.mobileBanner}
          src={data.mobileCoverImage}
          alt="banner"
        ></img>
      </div>
      <div className={styles.LandingScreenContent}>
        <LeftSection landingPageConstant={data} opactiy={opactiy} />
      </div>
    </div>
  );
}

export default LandingSection;
