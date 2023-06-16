import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { Burger, Menu } from "../Hamburger/Hamburger";
import styles from "./BottomNavBar.module.scss";
import { convertMobileNo } from "../../utils";
import Link from "next/link";

import { withRouter } from "next/router";

const BottomNavBar = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => {
    open && setOpen(false);
  });

  const mobileNo = convertMobileNo(process.env.mobileNo);

  const servicesPages = [
    "/doors",
    "/windows",
  ];
  return (
    <div className={styles.bottomNav}>
      <Link href="/" passHref>
        <div
          className={`${styles.btnTab} ${props.router.pathname === "/" ? styles.active : ""
            }`}
        >
          <Image
            src={"/assets/images/menu/home.svg"}
            height={20}
            width={20}
            alt="home"
            styles={{ color: "white", fill: "white", stroke: "white" }}
          />
          <div className={styles.btnLabel}>Home</div>
        </div>
      </Link>
      <div
        className={`${styles.btnTab} ${servicesPages.includes(props.router.pathname) ? styles.active : ""
          }`}
        onClick={() => {
          setOpen(true);
        }}
      >
        <Image
          src={"/assets/images/menu/services.svg"}
          height={20}
          width={20}
          alt="home"
        />
        <div className={styles.btnLabel}>Services</div>
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
      <Link href="/blogs" passHref>
        <div className={styles.btnTab}>
          <Image
            src={"/assets/images/menu/M3.svg"}
            height={20}
            width={20}
            alt="home"
          />
          <div className={styles.btnLabel}>Blogs</div>
        </div>
      </Link>

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
      <div ref={node}>
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default withRouter(BottomNavBar);
