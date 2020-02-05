import React from "react";

import styles from "./WelcomeLayout.module.scss";

import WelcomeImgSrc from "../../images/auth/welcome.jpg";

const WelcomeLayout = ({ children }) => {
  return (
    <div className={styles.welcomeWrap}>
      <div
        className={styles.mainLeft}
        style={{
          background: `url(${WelcomeImgSrc}) no-repeat center center`,
          backgroundSize: `cover`
        }}
      />
      <div className={styles.mainRight}>{children}</div>
    </div>
  );
};

export default WelcomeLayout;
