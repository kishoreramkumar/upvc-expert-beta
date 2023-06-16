import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./DurabilitySafety.module.scss";
import SliderWrapper from "../Slider/Slider.index";
import { useState } from "react";
import Modal from "../Modal/Modal";


const DurabilitySafety = ({
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
        <div className={styles.DurabilitySafetyContainer}>
            <SectionTitle title={data.title}></SectionTitle>
            <div className={styles.DurabilitySafetyWrapper}>
                <div className={styles.DurabilitySafetyList}>
                    {data.data.map((d, index) => {
                        return <div key={index} className={styles.DurabilitySafetyListItem}>
                            <div className={styles.DurabilitySafetyListItemWrapper}>
                                <img src={d.img} alt=""></img>
                                <div>{d.name}</div>
                            </div>
                        </div>
                    })}
                </div>
                <div className={styles.DurabilitySafetyRightWrapper}>
                    <div className={styles.DurabilitySafetyVideoWrapper} onClick={() => openModal(data.videoUrl)} >
                        <img src={data.thumbnail} className={styles.DurabilitySafetyThumb} />
                        <div className={styles.DurabilitySafetyPlayIcon}>
                            <img src="/assets/images/common/play-icon.svg"></img>
                        </div>
                    </div>
                </div>
            </div>
            {modalOpen && (
                <Modal>
                    <div className={styles.DurabilitySafetyVideoModal}>
                        <div className={styles.DurabilitySafetyVideoClose} onClick={closeModal}>Close</div>
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

export default DurabilitySafety;
