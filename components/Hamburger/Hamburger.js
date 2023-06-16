import { useState, useRef } from "react";
import Link from "next/link";
import styles from "./Hamburger.module.scss";
import Image from "next/image";

import { navBarMenu } from "../../constants/constants";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

export const Menu = ({ open }) => {
  return (
    <div className={`${styles.HamburgerMenu} ${open && styles.Open}`}>
      <div className={styles.logoWrapper}>
        <Link href={"/"} passHref>
          <Image src={"/assets/images/common/logo.jpg"} alt="logo" layout="fill" />
        </Link>
      </div>
      <MobileNavBar navButtons={navBarMenu(process.env.mobileNo)} />
    </div>
  );
};

export const Burger = ({ open, setOpen, className }) => {
  return (
    <div
      className={`${styles.HamburgerIcon} ${className}`}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </div>
  );
};

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => {
    open && setOpen(false);
  });
  return (
    <div className={styles.HamburgerWrapper}>
      <Burger open={open} setOpen={setOpen} />
      <div ref={node}>
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Hamburger;
