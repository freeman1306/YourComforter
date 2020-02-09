import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./AdminReportPage.module.scss";

import { getStatus } from "../../helpers/ordersData";

const ReportInfo = ({ date, duration, amount, status }) => {
  const { color, name } = getStatus(status);

  return (
  <div className={styles.dataWrap}>
    <p className={styles.dataItem}>
      Report date: <span>{date}</span>
    </p>

    <p className={styles.dataItem}>
      Duration: <span>{duration} hours</span>
    </p>

    <p className={styles.dataItem}>
      Rate: <span>${amount}</span>
    </p>
    <p className={classNames(styles.dataItem, styles.description)}>
      <span style={{ color }}>• </span>
      {name}
    </p>
  </div>
)
};

ReportInfo.propTypes = {
  date: PropTypes.string,
  duration: PropTypes.number,
  amount: PropTypes.number,
  status: PropTypes.string
};

ReportInfo.defaultProps = {
  date: "00/00/0000",
  duration: "0",
  amount: 0,
  status: ""
};

export default ReportInfo;
