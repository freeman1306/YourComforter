import React from "react";
import styles from "./AdminDashboard.module.scss";
import classNames from "classnames";

const AdminCard = ({ title, count, small, maleCount, femaleCount }) => {
  return (
    <div
      className={classNames(styles.adminCard, {
        [styles.cardSmallHeight]: small
      })}
    >
      <span className={styles.cardTitle}>{title}</span>

      {!maleCount ? (
        <span className={styles.cardCount}>{count}</span>
      ) : (
        <div className={styles.genders}>
          <span className={styles.genderWrap}>
            <p className={styles.genderSex}>Male</p>
            <p className={styles.genderCount}>{maleCount}%</p>
          </span>
          <span className={styles.genderWrap}>
            <p className={styles.genderSex}>Female</p>
            <p className={styles.genderCount}>{femaleCount}%</p>
          </span>
        </div>
      )}
    </div>
  );
};

export default AdminCard;
