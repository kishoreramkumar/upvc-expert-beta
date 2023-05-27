import Image from "next/image";
import { forwardRef } from "react";
import Slider from "react-slick";

import ArrowImg from "../../public/assets/images/arrowWithCircle.svg";

import styles from "./Slider.module.scss";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems: "center" }}
      onClick={onClick}
    >
      <div
        style={{
          width: "2rem",
          height: "2rem",
          position: "relative",
          margin: "0 0.5rem",
        }}
      >
        <Image src={ArrowImg} alt="arrow" layout="fill" />
      </div>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems: "center" }}
      onClick={onClick}
    >
      <div
        style={{
          width: "2rem",
          height: "2rem",
          position: "relative",
          margin: "0 0.5rem",
          transform: "rotate(180deg)",
        }}
      >
        <Image src={ArrowImg} alt="arrow" layout="fill" />
      </div>
    </div>
  );
}

// eslint-disable-next-line react/display-name
const SliderWrapper = forwardRef(({ children, ...restProps }, ref) => {
  const settings = {
    ...restProps,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider ref={ref} {...settings} className={styles.sliderWrapper}>
      {children}
    </Slider>
  );
});

export default SliderWrapper;
