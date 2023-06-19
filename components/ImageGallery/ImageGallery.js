import styles from "./ImageGallery.module.scss";
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

const ImageGallery = ({ title = "Image Gallery", data = [], viewMoreClick = () => { } }) => {
    const router = useRouter();
    return (
        <div className={styles.sliderWrapperImageGallery}>
            <SectionTitle title={title} type="h2" />
            <SliderWrapper {...settings}>
                {data.map((el, index) => (
                    <div key={index} onClick={() => { router.push(el.path) }}>
                        <RecentProjectCard image={el.image} title={el.title} />
                    </div>
                ))}
            </SliderWrapper>
            <Button
                onClick={viewMoreClick}
                customClass={styles.button}
                disabledClass={styles.disabledButton}
            >
                View More
            </Button>
        </div>
    );
};

export default ImageGallery;

const RecentProjectCard = ({ image, title }) => {
    return (
        <div className={styles.imageGalleryCardWrapper}>
            <div className={styles.recentCardImg}>
                <img src={`https://d21xn5q7qjmco5.cloudfront.net/images/windowtype/thumb1626198730.png`} alt="proj" loading="lazy" />
            </div>
            <div className={styles.bottomWrapper}>
                <div>{title}</div>
                {/* <div>Kodihalli</div> */}
            </div>
        </div>
    );
};
