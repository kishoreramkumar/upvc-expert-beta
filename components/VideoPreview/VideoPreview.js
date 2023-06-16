import Modal from "../Modal/Modal";
import styles from "./VideoPreview.module.scss";

function VideoPreview() {
    return <>
        {modalOpen && (
            <Modal>
                <iframe
                    src={selectedVideo.url}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="Video Player"
                    autoPlay
                />
                <button className="close-btn" onClick={closeModal}>
                    Close
                </button>
            </Modal>
        )}
        <div className={styles.videoPreviewWrapper}>
            <div className={styles.recentCardImg}>
                <img src={`/assets/images/${image}`} alt="proj" loading="lazy" />
            </div>
            <div className={styles.bottomWrapper}>
                <div>{title}</div>
                {/* <div>Kodihalli</div> */}
            </div>
        </div>
    </>
}

export default VideoPreview;