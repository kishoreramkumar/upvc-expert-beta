import styles from "./RecentProjects.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
// import 'slick-carousel/slick/slick-theme.css';
import { recentProjectImages } from "../../constants/constants";
import SliderWrapper from "../Slider/Slider.index";

const settings = {
  // dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  swipe: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const RecentProjects = ({ title = "Sqft.Expert Projects" }) => {
  return (
    <div className={styles.sliderWrapper}>
      <SectionTitle title={title} type="h2" />
      <SliderWrapper {...settings}>
        {recentProjectImages.map((el, index) => (
          <div key={index}>
            <RecentProjectCard image={el.image} title={el.title} />
          </div>
        ))}
      </SliderWrapper>
    </div>
  );
};

export default RecentProjects;

const RecentProjectCard = ({ image, title }) => {
  return (
    <div className={styles.recentCardWrapper}>
      <div className={styles.recentCardImg}>
        <img src={`/assets/images/${image}`} alt="proj" loading="lazy" />
      </div>
      <div className={styles.bottomWrapper}>
        <div>{title}</div>
        {/* <div>Kodihalli</div> */}
      </div>
    </div>
  );
};
