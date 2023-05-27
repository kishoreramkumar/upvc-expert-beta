import styles from "./SectionTitle.module.scss";

function SectionTitle(props) {
  return (
    <div className={styles.SectionTitleWrapper}>
      <h2 className={styles.SectionTitle}>{props.title}</h2>
    </div>
  );
}

export default SectionTitle;
