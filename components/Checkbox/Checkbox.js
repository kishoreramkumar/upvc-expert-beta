import { useEffect, useState } from "react";
import styles from "./Checkbox.module.scss";
const Checkbox = ({ value, onChange }) => {
  return (
    <input
      type={"checkbox"}
      // className={styles.FormFieldInput}
      checked={value}
      onChange={onChange}
    />
  );
};

export default Checkbox;
