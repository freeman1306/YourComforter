import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import moment from "moment";

import styles from "./withSelectTime.module.scss";

import PopupWrapper from "../../components/PopupWrapper/PopupWrapper";
import Schedule from "../../components/Schedule/Schedule";

import ConfirmTimeForm from "../../forms/ConfirmTimeForm/ConfirmTimeForm";

import { getDatesArrayBetweenDates } from "../../helpers";

const withSelectTime = () => WrappedComponent => {
  const SelectTime = props => {
    const [selectedTime, setSelectedTime] = useState([]);

    const [userId, setUserId] = useState(null);

    // Data for Confirm time form
    const [requestedDay, setRequestedDay] = useState("");
    const [requestedStartTime, setRequestedStartTime] = useState("");
    const [requestedEndTime, setRequestedEndTime] = useState("01:00 PM");

    const setInitialState = () => {
      setSelectedTime([]);
      setRequestedDay("");
      setRequestedStartTime("");
      setRequestedEndTime("01:00 PM");
    };

    // Handling Schedule
    const [isRequested, setIsRequested] = useState(false);
    const toogleIsRequestedStatus = () => {
      setIsRequested(!isRequested);
      setInitialState();
    };
    const handleSubmitRequest = selected => {
      setIsRequested(false);
      if (selected.length > 0) {
        const date = moment(selected[0], "YYYY-MM-DD:HH-mm");
        const endTime = moment(selected[selected.length - 1], "YYYY-MM-DD:HH-mm")
          .add(1, "hour")
          .format("hh:mm A");
        const day = date.format("YYYY-MM-DD");
        const startTime = date.format("hh:mm A");

        setSelectedTime(selected);
        setRequestedEndTime(endTime);
        setRequestedDay(day);
        setRequestedStartTime(startTime);
        setIsConfirm(true);
      }
    };

    // Handling Confirm time form
    const [isConfirm, setIsConfirm] = useState(false);
    const handleConfirm = () => setIsConfirm(!isConfirm);
    const handleSubmitConfirm = ({ startTime, startTimePeriod, endTime, endTimePeriod, day }) => {
      setIsConfirm(false);
      const date = day
        ? moment(day).format("YYYY-MM-DD")
        : moment(selectedTime[0], "YYYY-MM-DD:HH-mm").format("YYYY-MM-DD");
      const start = moment(`${startTime} ${startTimePeriod}`, "hh:mm A").format("HH-mm");
      const end = moment(`${endTime} ${endTimePeriod}`, "hh:mm A").format("HH-mm");
      const dates = getDatesArrayBetweenDates(
        `${date}:${start}`,
        `${date}:${end}`,
        "YYYY-MM-DD:HH-mm"
      );

      dates[dates.length - 1] = `${date}:${end}`;
      props.history.push("/checkout", {
        comforterId: userId,
        dates
      });
    };

    return (
      <>
        <WrappedComponent
          {...props}
          toogleSelect={toogleIsRequestedStatus}
          setUserId={id => setUserId(id)}
        />
        <div>
          {isRequested && (
            <PopupWrapper
              title="Trusted companion’s professional schedule"
              closeAction={toogleIsRequestedStatus}
            >
              <>
                <Schedule
                  className={{
                    container: styles.schedule,
                    week: styles.scheduleWeek,
                    day: styles.scheduleDay,
                    time: styles.scheduleTime,
                    info: styles.scheduleInfo,
                    busy: styles.scheduleTimeBusy,
                    selected: styles.scheduleTimeSelected,
                    free: styles.scheduleTimeFree,
                    unavailable: styles.scheduleTimeUnavailable
                  }}
                  onSelectTime={handleSubmitRequest}
                  onCancel={toogleIsRequestedStatus}
                  userId={userId}
                  allowSelecting={true}
                  infoLabels={{
                    unavailable: "Unavailable hours",
                    free: "Free",
                    busy: "Busy",
                    selected: "Selected"
                  }}
                />
              </>
            </PopupWrapper>
          )}
          {isConfirm && (
            <ConfirmTimeForm
              day={requestedDay}
              startTime={requestedStartTime}
              endTime={requestedEndTime}
              onCancel={handleConfirm}
              onSubmit={handleSubmitConfirm}
              comforterId={userId}
            />
          )}
        </div>
      </>
    );
  };

  PropTypes.propTypes = {
    userId: PropTypes.string.isRequired
  };

  return withRouter(SelectTime);
};

export default withSelectTime;
