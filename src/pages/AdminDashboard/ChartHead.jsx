import React from "react";
import SelectBlock from "./SelectBlock";
import styles from "./AdminDashboard.module.scss";

const ChartHead = ({ startDay, stopDay, changePeriod }) => {
  return (
    <div className={styles.chartHead}>
      <span className={styles.chartHeadDate}>
        {startDay} - {stopDay}
      </span>
      <div className={styles.wrapSelectBlockForChartHead}>
        <SelectBlock changePeriod={changePeriod}/>
      </div>
    </div>
  );
};

export default ChartHead;
