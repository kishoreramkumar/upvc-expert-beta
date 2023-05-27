import Checkbox from "../../Checkbox/Checkbox";
import styles from "./CardAccordian.module.scss";

const CardAccordian = ({
  accordianData,
  selected,
  setAccordianTab,
  wrapperClass = "",
  onCheckboxChange,
  checkBoxValue,
  showCheckbox = false,
  expandAll = false,
}) => {
  return (
    <div className={`${styles.cardAccordianWrapper} ${wrapperClass}`}>
      <div className={styles.header}>
        <div>
          <div className={styles.headerText}>
            <b>{`${accordianData.packageName}`}</b>
          </div>
          <div
            className={styles.headerText}
          >{`${accordianData.prefix} ${accordianData.amt}${accordianData.suffix}`}</div>
        </div>

        {showCheckbox && (
          <div>
            <Checkbox value={checkBoxValue} onChange={onCheckboxChange} />
          </div>
        )}
      </div>
      <div className={styles.body}>
        {accordianData?.productData?.map((el, index) => (
          <div className={styles.mainContent} key={`${el}-${index}`}>
            <div
              className={styles.accordianTitleWrapper}
              onClick={() => setAccordianTab(index)}
            >
              <div className={styles.accordianTitle}>
                <b>{el.type}</b>
              </div>
              {!expandAll && (
                <>
                  {selected.selectedIndex === index && (
                    <div className={styles.icon}>
                      {!selected.isOpen ? "+" : "-"}
                    </div>
                  )}
                  {selected.selectedIndex !== index && (
                    <div className={styles.icon}>+</div>
                  )}
                </>
              )}
            </div>
            {/* {selected.selectedIndex === index && selected.isOpen && ( */}
            <div
              className={
                (selected.selectedIndex === index && selected.isOpen) ||
                expandAll
                  ? styles.accordianContent
                  : styles.hideAccordianContent
              }
            >
              {el?.data?.map((_i, index) => (
                <div key={index} className={styles.accordianContentItem}>
                  {_i}
                </div>
              ))}
            </div>
            {/* )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardAccordian;
