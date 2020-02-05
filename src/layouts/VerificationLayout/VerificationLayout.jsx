import React from "react";
import styles from "./VerificationLayout.module.scss";

const VerificationLayout = ({ children }) => {
    return (
        <main>
            <div className={styles.formWrapper}>{children}</div>
            <a href="localhost:3000" className={styles.hint}>
                <h3>?</h3>
            </a>
        </main>
    );
};

export default VerificationLayout;
