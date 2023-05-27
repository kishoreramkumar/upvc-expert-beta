import { useEffect, useRef, useState } from "react";
import Button from "../../Button/Button";
import CardAccordian from "../../PackageDetails/CardAccordian/CardAccordian";
import styles from "./StepTwo.module.scss";
import Checkbox from "../../Checkbox/Checkbox";

import "slick-carousel/slick/slick.css";

const settings = {
  // dots: true,
  infinite: false,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  swipe: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const StepTwo = (props) => {
  const [selected, setSelected] = useState({ isOpen: false });
  const [selectedPackage, setSelectedPackage] = useState([]);
  const wrapperRef = useRef();
  const setAccordianTab = (index) => {
    setSelected({
      isOpen: selected.selectedIndex === index ? !selected.isOpen : true,
      selectedIndex: index,
    });
  };
  const isBtnEnabled = false;

  useEffect(() => {
    setSelectedPackage(props.value);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value, props.setValue]);

  useEffect(() => {
    wrapperRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, []);

  return (
    <div className={styles.StepTwoWrapper} ref={wrapperRef}>
      <div className={styles.header}>Step 2: Package details</div>
      <div className={styles.content}>
        <div className={styles.packageDetailsWrapperMain}>
          {props.packageAccordianData.map((el, index) => {
            const selectedIndex = selectedPackage.findIndex(
              (obj) => obj.packageName === el.packageName
            );
            return (
              <CardAccordian
                key={index}
                accordianData={el}
                selected={selected}
                setAccordianTab={setAccordianTab}
                wrapperClass={styles.packageDetailsContainer}
                showCheckbox={true}
                checkBoxValue={selectedIndex >= 0}
                onCheckboxChange={(e) => {
                  const tempPackage = [...selectedPackage];
                  if (e.target.checked) {
                    tempPackage.push(el);
                    setSelectedPackage(tempPackage);
                  } else {
                    const index = tempPackage.findIndex(
                      (obj) => obj.packageName === el.packageName
                    );
                    if (index >= 0) {
                      tempPackage.splice(index, 1);
                    }
                    setSelectedPackage(tempPackage);
                  }
                }}
              ></CardAccordian>
            );
          })}
        </div>
      </div>
      <div className={styles.footer}>
        <Button onClick={props.onPrevClick} customClass={styles.button}>
          Previous
        </Button>
        <Button
          onClick={() => {
            props.onNextClick();
            props.setValue(selectedPackage);
          }}
          disabled={selectedPackage.length <= 0}
          customClass={styles.button}
          disabledClass={styles.disabledButton}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
