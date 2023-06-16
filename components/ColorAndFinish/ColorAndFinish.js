import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./ColorAndFinish.module.scss";
import SliderWrapper from "../Slider/Slider.index";
import { useState } from "react";
import Modal from "../Modal/Modal";


const ColorAndFinish = ({
    data,
    title = "Clientele",
}) => {


    const [modalOpen, setModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const openModal = (video) => {
        setSelectedVideo(video);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedVideo(null);
        setModalOpen(false);
    }

    return (
        <div className={styles.ColorAndFinishContainer}>
            <SectionTitle title={data.title}></SectionTitle>
            <div className={styles.ColorAndFinishWrapper}>
                <div className={styles.ColorAndFinishList}>
                    {data.data.map((d, index) => {
                        return <div key={index} className={styles.ColorAndFinishListItem}>
                            <div className={styles.ColorAndFinishListItemWrapper}>
                                <img src={d.img} alt=""></img>
                            </div>
                        </div>
                    })}
                </div>
                <div className={styles.ColorAndFinishRightWrapper}>
                    <div className={styles.ColorAndFinishVideoWrapper} onClick={() => openModal(data.videoUrl)} >
                        <img src={data.thumbnail} className={styles.ColorAndFinishThumb} />
                        <div className={styles.ColorAndFinishPlayIcon}>
                            <img src="/assets/images/common/play-icon.svg"></img>
                        </div>
                    </div>
                </div>
            </div>
            {modalOpen && (
                <Modal>
                    <div className={styles.ColorAndFinishVideoModal}>
                        <div className={styles.ColorAndFinishVideoClose} onClick={closeModal}>Close</div>
                        <iframe
                            className="DurabilitySafetyVideo"
                            src={selectedVideo}
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

export default ColorAndFinish;
