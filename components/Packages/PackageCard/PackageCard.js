import Button from "../../Button/Button";
import styles from "./PackageCard.module.scss";
import Image from "next/image";

const PackageCard = ({ details, onSelectPackage }) => {
  return (
    <div className={styles.packageCardWrapper}>
      <div className={styles.packageBoxHeading}>
        <div>
          <h4 className="inherit">{details.name}</h4>
        </div>
        <div className={styles.price}>
          {details.price && (
            <div className={styles.oldPrice}>Rs.{details.price}</div>
          )}
          {details.type === "button" ? (
            <Button
              customClass={styles.askBtn}
              onClick={() => {
                document.getElementById("contact-us-input").scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                });
              }}
            >
              {details.discountedPrice}
            </Button>
          ) : (
            <div>Rs.{details.discountedPrice}</div>
          )}
        </div>
        <div>(Including GST)</div>
      </div>
      <div className={styles.mainImgWrapper}>
        <img
          className={styles.mainImg}
          src={`/assets/images/${details.image}`}
          alt={details.name}
          // layout="fill"
        />
      </div>
      <div className={styles.footer}>
        <Button customClass={styles.button} onClick={()=>onSelectPackage(details) }>View More</Button>
      </div>
    </div>
  );
};
export default PackageCard;
