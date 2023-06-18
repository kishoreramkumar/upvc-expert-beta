import styles from "./AvailableDesign.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
// import 'slick-carousel/slick/slick-theme.css';
import SliderWrapper from "../Slider/Slider.index";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button/Button";

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

const AvailableDesign = ({ title = "Available Design", data = [], viewMoreClick = () => { } }) => {
    const router = useRouter();
    return (
        <div className={styles.sliderWrapperAvailableDesign}>
            <h2>{title}</h2>
            <SliderWrapper {...settings}>
                {data.map((el, index) => (
                    <div key={index} onClick={() => { router.push(el.path) }}>
                        <RecentProjectCard image={el.image} title={el.title} />
                    </div>
                ))}
            </SliderWrapper>
        </div>
    );
};

export default AvailableDesign;

const RecentProjectCard = ({ image, title }) => {
    return (
        <div className={styles.availableDesignCardWrapper}>
            <div className={styles.recentCardImg}>
                <img src={`${image}`} alt="proj" loading="lazy" />
            </div>
            <div className={styles.bottomWrapper}>
                <div>{title}</div>
                {/* <div>Kodihalli</div> */}
            </div>
        </div>
    );
};
