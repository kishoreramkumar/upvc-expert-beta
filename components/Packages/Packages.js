import { useState } from "react";
import PackageCard from "./PackageCard/PackageCard";
import styles from "./Packages.module.scss";
import { productDetails, tabs } from "../../constants/constants";
import SectionTitle from "../SectionTitle/SectionTitle";

const Packages = ({onSelectPackage}) => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.packageContainer}>
      <SectionTitle title="Sqft.Expert Packages" type="h2" />
      <div className={styles.packageWrapper}>
        <div className={styles.packagesTab}>
          {tabs.map((el, index) => (
            <div
              key={index}
              className={[
                styles.tab,
                active === index ? styles.activeTab : "",
                index === 0 ? styles.activeTabBorder : "",
              ].join(" ")}
              onClick={(e) => {
                e?.currentTarget?.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "start",
                });
                setActive(index);
              }}
            >
              <h3 className="inherit">{el}</h3>
            </div>
          ))}
        </div>
        <div className={styles.tabsMain}>
          {productDetails &&
            productDetails[active]?.products?.map((el, index) => {
              return (
                <div key={index} className={styles.tabCard}>
                  <PackageCard details={el}  onSelectPackage={onSelectPackage} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Packages;
