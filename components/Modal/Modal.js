import styles from "./Modal.module.scss";

function Modal(props) {
  return <div className={styles.modalwrapper}>{props.children}</div>;
}

export default Modal;
