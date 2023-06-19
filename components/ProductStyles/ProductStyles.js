import styles from "./ProductStyles.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
// import 'slick-carousel/slick/slick-theme.css';
import SliderWrapper from "../Slider/Slider.index";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button/Button";

const settings = {
  // dots: true,
  infinite: false,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  swipe: true,
  autoplay: false,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const ProductStyles = ({ title = "Product Styles", data = [], infinite, showBtn = false }) => {
  const router = useRouter();
  return (
    <div className={styles.sliderWrapper}>
      <SectionTitle title={title} type="h2" />
      <SliderWrapper {...settings} infinite={infinite ?? settings.infinite}>
        {data.map((el, index) => (
          <div key={index} onClick={() => { router.push(el.path) }}>
            <RecentProjectCard image={el.image} title={el.title} icon={el.icon} showBtn={showBtn} />
          </div>
        ))}
      </SliderWrapper>
    </div>
  );
};

export default ProductStyles;

const RecentProjectCard = ({ image, title, icon, showBtn }) => {
  return (
    <div className={styles.productStyleCardWrapper}>
      <div className={styles.recentCardImg}>
        <img src={`https://d21xn5q7qjmco5.cloudfront.net/images/windowtype/thumb1626198730.png`} alt="proj" loading="lazy" />
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.bottomLeftWrapper}>
          {icon && <img src={icon} />}
          <div>{title}</div>
        </div>
        {showBtn && <Button type="secondary" customClass={styles.buttonStyle}>Explore</Button>}
        {/* <div>Kodihalli</div> */}
      </div>
    </div>
  );
};
