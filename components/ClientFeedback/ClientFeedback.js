import { useState, useRef, useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./ClientFeedback.module.scss";
import SliderWrapper from "../Slider/Slider.index";
import Modal from "../Modal/Modal";

const ClientFeedback = ({
    videos,
    title = "Client's Feedback",
    noOfSlides = 3,
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const sliderRef = useRef();
    const packageRef = useRef();
    const settings = {
        infinite: false,
        slidesToShow: noOfSlides,
        slidesToScroll: 1,
        swipeToSlide: true,
        swipe: true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const openModal = (video) => {
        setSelectedVideo(video);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedVideo(null);
        setModalOpen(false);
    }


    return (
        <div className={styles.clientFeedbackWrapper}>
            <SectionTitle title={title}></SectionTitle>
            <div className={styles.packageDetailsWrapperMain} ref={packageRef}>
                <SliderWrapper {...settings} ref={sliderRef}>
                    {videos?.map((video, index) => (
                        <div key={index} className={styles.packageDetailsContainer}>
                            <div className={styles.clientFeedbackImgWrapper} onClick={() => openModal(video)} >
                                <img src={video.thumbnail} className={styles.clientFeedbackThumbnail} alt={`Video ${index + 1}`} />
                                <div className={styles.clientFeedbackPlayIcon}>
                                    <img src="/assets/images/common/play-icon.svg"></img>
                                </div>
                            </div>
                            <div>
                                <div className={styles.customerNameLabel}>{video.customerName}</div>
                                {/* <div>{video.organisationName}</div> */}
                                <div className={styles.customerPlace}>{video.place}</div>
                            </div>
                        </div>
                    ))}
                </SliderWrapper>
            </div>
            {modalOpen && (
                <Modal>
                    <div className={styles.clientFeedbackVideoModal}>
                        <div className={styles.clientFeedbackVideoClose} onClick={closeModal}>Close</div>
                        <iframe
                            className="clientFeedbackVideo"
                            src={selectedVideo.url}
                            width="100%"
                            height="100%"
                            allowFullScreen
                            title="Video Player"
                            autoPlay
                        />
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default ClientFeedback;
