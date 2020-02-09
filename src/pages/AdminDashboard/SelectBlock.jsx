import React from "react";
import styles from "./AdminDashboard.module.scss";

const SelectBlock = ({changePeriod}) => {
  return (
    <div className={styles.selectBlock}>
      <p>Select time period:</p>
      <select 
        name="" 
        onChange={(e) => {changePeriod(e.target.value)}}
        className={styles.select}
      >
        <option value="week" className={styles.option}>
          Week
        </option>
        <option value="month" className={styles.option}>
          Month
        </option>
      </select>
    </div>
  );
};

export default SelectBlock;
