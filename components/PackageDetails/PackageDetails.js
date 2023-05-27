import { useState, useRef, useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import CardAccordian from "./CardAccordian/CardAccordian";
import Stepper from "../Stepper/Stepper";
import styles from "./PackageDetails.module.scss";
import SliderWrapper from "../Slider/Slider.index";

const PackageDetails = ({
  packageAccordianData,
  title,
  selectedPackage,
  expandAll = false,
  noOfSlides = 3,
}) => {
  const [selected, setSelected] = useState({ isOpen: false });
  const [currentSlide, setCurrentSlide] = useState(1);
  const sliderRef = useRef();
  const packageRef = useRef();
  const settings = {
    infinite: false,
    slidesToShow: noOfSlides,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      setCurrentSlide(next + 1);
    },
  };

  useEffect(() => {
    sliderRef?.current?.slickGoTo?.(currentSlide - 1);
  }, [currentSlide]);

  const setAccordianTab = (index) => {
    setSelected({
      isOpen: selected.selectedIndex === index ? !selected.isOpen : true,
      selectedIndex: index,
    });
  };

  useEffect(() => {
    let index = packageAccordianData.findIndex(
      (el) =>
        el.packageName.toLowerCase()?.split(" ")?.join("") === selectedPackage
    );
    if (index >= 0) {
      setTimeout(() => {
        setCurrentSlide(index + 1);
        packageRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }, 100);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPackage]);

  const stepperData = packageAccordianData.map((packageDetail, index) => {
    return { type: index + 1, name: packageDetail.name };
  });

  return (
    <div className={styles.packageDetailsWrapper}>
      <SectionTitle title={title}></SectionTitle>
      <div className={styles.packageDetailsWrapperMain} ref={packageRef}>
        <div className={styles.stepperWrappper}>
          <Stepper
            stepsData={stepperData}
            active={currentSlide}
            onStepsClick={(type) => {
              setCurrentSlide(type);
            }}
          />
        </div>
        <SliderWrapper {...settings} ref={sliderRef}>
          {packageAccordianData?.map((el, index) => (
            <div key={index} className={styles.packageDetailsContainer}>
              <CardAccordian
                accordianData={el}
                selected={selected}
                setAccordianTab={setAccordianTab}
                expandAll={expandAll}
              ></CardAccordian>
            </div>
          ))}
        </SliderWrapper>
      </div>
    </div>
  );
};

export default PackageDetails;
