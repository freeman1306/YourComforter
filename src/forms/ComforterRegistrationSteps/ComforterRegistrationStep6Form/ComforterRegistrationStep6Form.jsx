import React, { useState } from "react";
import PropTypes from "prop-types";

import { withModal, Modal } from "../../../context/ModalContext";

import styles from "./ComforterRegistrationStep6Form.module.scss";
import ComfoterRegistrationSchedule from "../../../components/ComfoterRegistrationSchedule/Schedule";
import PopupWrapper from "../../../components/PopupWrapper/PopupWrapper";

import Button from "../../../components/Button/Button";
import service from "../../../service";

const ComforterRegistrationStep6Form = ({
  onSubmit,
  onBack,
  context: { toogleModal, closeModal },
  user
}) => {
  const [showHelpInfo, setShowHelpInfo] = useState(true);
  const closeHelpInfo = () => setShowHelpInfo(false);

  const handleSelecting = hours => {
    if (hours.length === 0) return toogleModal("emptyWorkingHours");
    service.userService.saveUserSchedule(user.id, hours, user.token).then(() => onSubmit());
  };

  return (
    <div className={styles.wrapper}>
      <ComfoterRegistrationSchedule
        onSelectTime={handleSelecting}
        onCancel={onBack}
        infoLabels={{
          unavailable: "Unavailable hours",
          free: "Working hours"
        }}
        className={{
          info: "comforterScheduleInfo"
        }}
      />
      <Modal
        id="emptyWorkingHours"
        icon="attention"
        type="dialog"
        title="Attention"
        subtitle="Working hours not set"
        text="Users will not be able to place an order if your working hours are not set."
        CancelButton={<Button onClick={() => closeModal()}>Ok</Button>}
      />
      {showHelpInfo && (
        <PopupWrapper
          className={{
            outer: styles.helpInfo,
            inner: styles.helpInfoInner,
            header: styles.helpInfoHeader,
            title: styles.helpInfoTitle
          }}
          closeAction={closeHelpInfo}
          title="Please, provide your working hours by clicking on each tile."
        >
          <div className={styles.helpInfoContent}>
            <div className={styles.helpInfoLabels}>
              <div className={styles.helpInfoLabel}>
                <span />
                Not working hours
              </div>
              <div className={styles.helpInfoLabel}>
                <span />
                Working hours
              </div>
            </div>
            <h5 className={styles.helpInfoSubtitle}>By default all hours are not working.</h5>
            <Button onClick={closeHelpInfo}>Got it</Button>
          </div>
        </PopupWrapper>
      )}
    </div>
  );
};

ComforterRegistrationStep6Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};

export default withModal(ComforterRegistrationStep6Form);
