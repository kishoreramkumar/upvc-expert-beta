import { useState, useRef, useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./ClientList.module.scss";
import SliderWrapper from "../Slider/Slider.index";
import Modal from "../Modal/Modal";

const ClientList = ({
    data,
    title = "Clientele",
    noOfSlides = 3,
}) => {

    const sliderRef = useRef();
    const packageRef = useRef();
    const settings = {
        swipeToSlide: true,
        swipe: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear',
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
        <div className={styles.clientListWrapper}>
            <SectionTitle title={title}></SectionTitle>
            <div className={styles.packageDetailsWrapperMain} ref={packageRef}>
                <SliderWrapper {...settings} ref={sliderRef}>
                    {data?.map((clientImg, index) => (
                        <div key={index} className={styles.packageDetailsContainer}>
                            <div className={styles.clientFeedbackImgWrapper}>
                                <img src={clientImg.thumbnail} className={styles.clientFeedbackThumbnail} />
                            </div>
                        </div>
                    ))}
                </SliderWrapper>
            </div>
        </div>
    );
};

export default ClientList;
