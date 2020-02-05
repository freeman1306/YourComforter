import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./ReportPageLayout.module.scss";

import Button from "../../components/Button/Button";
import { underscoreRegExp, capitalizeFLetter } from "../../helpers/validation";

const ReportPageLayout = ({ service, subject, children, reportId,  status, terminateHandle }) => {

  return (
    <div className={classNames("mainWrapper", "main", styles.wrapper)}>
      <div className={styles.titleWrap}>
        <h2>Service report № {reportId} by Seeker</h2>
        <div className={styles.info}>
          <div className={styles.subject}>
            <p>Subject line: <span>“{capitalizeFLetter(subject.replace(underscoreRegExp,' '))}”</span></p>
            <p>Service: <span>{service}</span></p>
          </div>
          <Button 
            disabled={status === "completed" || status === "cancelled"}
            onClick={terminateHandle}
          >
            Terminate
          </Button>
        </div>
        
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

ReportPageLayout.propTypes = {
  service: PropTypes.string,
  subject: PropTypes.string,
  reportId: PropTypes.number,
  status: PropTypes.string,
  children: PropTypes.node.isRequired
};

ReportPageLayout.defaultProps = {
  service: "",
  subject: "Late arrival",
  reportId: "",
  status: "Requested"
};

export default ReportPageLayout;
