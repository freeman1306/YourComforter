import React from "react";
import SelectBlock from "./SelectBlock";
import styles from "./AdminDashboard.module.scss";

const TopCard = ({ head, cardData, changePeriod }) => {
  return (
    <div className={styles.topCard}>
      <div className={styles.topCardHead}>
        <p>{head}</p>
      </div>
      <div className={styles.topCardContent}>
        <div className={styles.wrapSelectForTopCard}>
          <SelectBlock changePeriod = {changePeriod}/>
        </div>

        <ul className={styles.topCardData}>
          {cardData.map((item, index) => {
            return (
              <li key={item.id} className={styles.topCardDataList}>
                <span className={styles.numberList}>{index + 1}</span>{" "}
                <p className={styles.contentList}>
                  {
                    !item.name ? (
                      `${item.first_name} ${item.last_name}`
                    ) : (
                      item.name
                    )
                  }
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TopCard;
