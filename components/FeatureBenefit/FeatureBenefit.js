import styles from "./FeatureBenefit.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
// import 'slick-carousel/slick/slick-theme.css';
import { recentProjectImages } from "../../constants/constants";
import SliderWrapper from "../Slider/Slider.index";
import ExpandAccordian from "../ExpandAccordian/ExpandAccordian";

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

const FeatureBenefit = ({ title = "Features & Benefits", desc, data }) => {
    return (
        <div className={styles.sliderWrapperFeatureBenefit}>
            <h2 className={styles.title}>{title}</h2>
            <ExpandAccordian data={{ content: desc }} />
            <SliderWrapper {...settings}>
                {data.map((el, index) => (
                    <div key={index}>
                        <RecentProjectCard image={el.image} title={el.title} />
                    </div>
                ))}
            </SliderWrapper>
        </div>
    );
};

export default FeatureBenefit;

const RecentProjectCard = ({ image, title }) => {
    return (
        <div className={styles.featureBenefitWrapper}>
            <div className={styles.recentCardImg}>
                <img src={image} alt="proj" loading="lazy" />
            </div>
            <div className={styles.name}>{title}</div>
        </div >
    );
};
