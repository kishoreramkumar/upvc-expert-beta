import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Testimonials.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import SliderWrapper from "../Slider/Slider.index";

const Testimonials = ({ title = "Upvc.Expert reviews", testimonialList }) => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <div />,
    prevArrow: <div />,
    swipeToSlide: true,
    swipe: true,
    autoplay: true,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.TestimonialsContainer}>
      <SectionTitle title={title} />
      <div className={styles.TestimonialsSliderBlock}>
        <SliderWrapper {...settings}>
          {testimonialList.map((item, index) => (
            <div key={index} className={styles.TestimonialsSliderSingleBlock}>
              <span className={styles.TestimonialsSliderClientLabel}>
                `{item.label}`
              </span>
              <span className={styles.TestimonialsSliderClientName}>
                - {item.name}
              </span>
              <span className={styles.TestimonialsSliderCountLabel}>
                {index + 1}
              </span>
            </div>
          ))}
        </SliderWrapper>
      </div>
    </div>
  );
};

export default Testimonials;
