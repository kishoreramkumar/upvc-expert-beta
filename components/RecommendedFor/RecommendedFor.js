import styles from "./RecommendedFor.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
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

const RecommendedFor = ({ title = "Sqft.Expert Projects", data }) => {
    return (
        <div className={styles.sliderWrapperRecommendedFor}>
            <h2>Recommended For</h2>
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

export default RecommendedFor;

const RecentProjectCard = ({ image, title }) => {
    return (
        <div className={styles.recommendedForWrapper}>
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
