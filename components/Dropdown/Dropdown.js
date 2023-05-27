import { useEffect, useState } from "react";
import styles from "./Dropdown.module.scss";
const Dropdown = ({
  label,
  value = null,
  onChange,
  options = [],
  placeHolder = null,
}) => {
  const [classValue, setFocusClass] = useState(null);
  const setActive = (el, active) => {
    if (active) {
      setFocusClass(styles.FormField_isActive);
    } else {
      setFocusClass(null);
      if (el.target.value === "") setFocusClass(null);
      else setFocusClass(styles.FormField_isFilled);
    }
  };
  useEffect(() => {
    if (value && !classValue) {
      setFocusClass(styles.FormField_isFilled);
    }
  }, [classValue, value]);

  return (
    <div className={`${styles.FormField} ${classValue}`}>
      <div className={styles.FormFieldControl}>
        <label htmlFor="firstname" className={styles.FormFieldLabel}>
          {label}
        </label>

        <select
          value={value}
          onChange={onChange}
          className={styles.FormFieldInput}
          onBlur={(el) => {
            setActive(el, false);
          }}
          onFocus={(el) => {
            setActive(el, true);
          }}
          style={{ color: "red" }}
        >
          {placeHolder !== null && (
            <option style={{ color: "red" }}>{placeHolder}</option>
          )}
          {options?.map((option) => {
            return (
              <option
                style={{ color: "red" }}
                key={option.value}
                value={option.value}
              >
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
