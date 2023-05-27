import Stepper from "../Stepper/Stepper";
// import "slick-carousel/slick/slick.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import SliderWrapper from "../Slider/Slider.index";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems: "center" }}
      onClick={onClick}
    >
      {/* {">"} */}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems: "center" }}
      onClick={onClick}
    >
      {/* {"<"} */}
    </div>
  );
}

function HowItWorks({ title, data }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const sliderRef = useRef();
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipe: true,
    autoplay: true,
    beforeChange: (current, next) => setCurrentSlide(next + 1),
  };

  useEffect(() => {
    sliderRef?.current?.slickGoTo?.(currentSlide - 1);
  }, [currentSlide]);

  return (
    <div
      style={{
        width: "100%",
        background: "#fdf6f4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "2rem 0 3rem",
      }}
    >
      <SectionTitle title={title} />
      <Stepper
        stepsData={data}
        active={currentSlide}
        onStepsClick={(type) => {
          setCurrentSlide(type);
        }}
      />
      <div
        style={{
          maxWidth: "100%",
          width: "600px",
          margin: "auto",
          paddingTop: "2rem",
        }}
      >
        <SliderWrapper ref={sliderRef} {...settings}>
          {data?.map((slideDetail) => {
            const { type, name, description, img } = slideDetail;
            return (
              <div key={type}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    height: "300px",
                    flex: "1",
                  }}
                >
                  <Image
                    layout="fill"
                    src={`/assets/images/${img}`}
                    alt={name}
                    loading="lazy"
                  />
                </div>
                <div
                  style={{ width: "100%", background: "#fff", padding: "1rem" }}
                >
                  <div
                    style={{
                      fontSize: "1rem",
                      color: "orange",
                      textAlign: "center",
                    }}
                  >
                    {type}. {name}
                  </div>
                  {description && (
                    <div style={{ paddingTop: "0.5rem" }}>{description}</div>
                  )}
                </div>
              </div>
            );
          })}
        </SliderWrapper>
      </div>
    </div>
  );
}

export default HowItWorks;
