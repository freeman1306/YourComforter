import React from "react";
import classNames from "classnames";
import styles from "./RegistrationLayout.module.scss";

const RegistrationLayout = ({ title, children, description }) => {
  return (
    <main className={classNames("mainWrapper", styles.wrapper)}>
      <div className={styles.titleWrap}>
        <h2>{title}</h2>
        <p className={classNames(styles.description, "smallText")}>{description}</p>
      </div>
      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default RegistrationLayout;
