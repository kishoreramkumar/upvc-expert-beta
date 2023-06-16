import Image from "next/image";
import Link from "next/link";
import Hamburger from "../Hamburger/Hamburger";
import NavBar from "../NavBar";

import styles from "./index.module.scss";
import { navBarMenu } from "../../constants/constants";
import { convertMobileNo } from "../../utils";

const Header = (props) => {
  const mobileNo = convertMobileNo(process.env.mobileNo);
  return (
    <div className={`${styles.Header} ${props.className}`} id="header">
      <div className={styles.LogoIcon}>
        {props.disabled ? (
          <Image src={"/assets/images/common/logo.jpg"} alt="logo" layout="fill" />
        ) : (
          <Link href={"/"}>
            <Image src={"/assets/images/common/logo.jpg"} alt="logo" layout="fill" />
          </Link>
        )}
      </div>
      <div className={styles.contactNo}>
        <Link href={`tel:${mobileNo}`} passHref>
          <div
            style={{ width: "1.5rem", height: "1.5rem", position: "relative" }}
          >
            <Image
              src={"/assets/images/phoneIcon.svg"}
              alt="logo"
              layout="fill"
            ></Image>
          </div>
        </Link>
      </div>
      <NavBar navButtons={navBarMenu(process.env.mobileNo)} />
      {/* <Hamburger /> */}
    </div>
  );
};

export default Header;
