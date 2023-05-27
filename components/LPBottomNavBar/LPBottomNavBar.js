import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { Burger, Menu } from "../Hamburger/Hamburger";
import styles from "./LPBottomNavBar.module.scss";
import { convertMobileNo } from "../../utils";
import Link from "next/link";

import { withRouter } from "next/router";
import Modal from "../Modal/Modal";
import ContactForm from "../ContactForm/ContactForm";

const LPBottomNavBar = (props) => {
  const mobileNo = convertMobileNo(process.env.mobileNo);
  const [isModalOpen, toogleModalOpen] = useState(false);

  const servicesPages = [
    "/house-construction-bangalore",
    "/home-interior-design-bangalore",
    "/architectural-design-bangalore",
    "/house-plan-approvals-bangalore",
    "/structural-consultants-bangalore",
    "/about-us",
    "/contact-us",
  ];
  return (
    <div className={styles.bottomNav}>
      <div
        className={`${styles.btnTab} ${
          servicesPages.includes(props.router.pathname) ? styles.active : ""
        }`}
        onClick={() => {
          toogleModalOpen(true);
        }}
      >
        <Image
          src={"/assets/images/menu/services.svg"}
          height={20}
          width={20}
          alt="home"
        />
        <div className={styles.btnLabel}>Get Consultation</div>
      </div>
      <div
        className={styles.btnTab}
        onClick={() => {
          window.open(`https://wa.me/${process.env.mobileNo}`);
        }}
      >
        <Image
          src={"/assets/images/whatsApp.svg"}
          height={20}
          width={20}
          alt="home"
        />
        <div className={styles.btnLabel}>Lets Chat</div>
      </div>

      <Link href={`tel:${mobileNo}`} passHref>
        {/* <Burger className={styles.hamburgerMenuIcon} setOpen={() => {}} /> */}
        <div className={styles.btnTab}>
          <Image
            src={"/assets/images/phoneIcon.svg"}
            height={20}
            width={20}
            alt="home"
          />
          <div className={styles.btnLabel}>Call Us</div>
        </div>
      </Link>
      {isModalOpen && (
        <Modal>
          <ContactForm onClose={() => toogleModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
};

export default withRouter(LPBottomNavBar);
