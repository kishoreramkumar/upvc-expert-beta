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

const FeatureBenefit = ({ title = "Features & Benefits" }) => {
    return (
        <div className={styles.sliderWrapperFeatureBenefit}>
            <h2 className={styles.title}>{title}</h2>
            <ExpandAccordian data={{ content: "features benefit Content" }} />
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

export default FeatureBenefit;

const RecentProjectCard = ({ image, title }) => {
    return (
        <div className={styles.featureBenefitWrapper}>
            <div className={styles.recentCardImg}>
                <img src={`https://d21xn5q7qjmco5.cloudfront.net/images/featurebenefit/icon/1633594654.png`} alt="proj" loading="lazy" />
            </div>
            <div className={styles.name}>LARGE OPENINGS AND AMPLE SUNLIGHT </div>
        </div >
    );
};
