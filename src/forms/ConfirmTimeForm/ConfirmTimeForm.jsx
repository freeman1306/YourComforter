import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { Formik } from "formik";
import moment from "moment";
import validationSchema from "./validationSchema";

import style from "./ConfirmTimeForm.module.scss";

import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import TextMaskInput from "../../components/TextMaskInput/TextMaskInput";
import InputDate from "../../components/InputDate/InputDate";

import { ReactComponent as CloseIcon } from "../../icons/close-icon.svg";

import { processingBusyTimes, getDatesArrayBetweenDates } from "../../helpers";

import usePortal from "../../helpers/usePortal";
import service from "../../service";

const timePeriods = [
  { id: "0", value: "AM" },
  {
    id: "1",
    value: "PM"
  }
];

const ConfirmTimeForm = ({ comforterId, day, startTime, endTime, onSubmit, onCancel }) => {
  const [busy, setBusy] = useState([]);
  const [workingHours, setWorkingHoursData] = useState([]);

  const startTimePeriod = timePeriods.find(({ value }) => value === startTime.substr(startTime.length - 2));
  const endTimePeriod = timePeriods.find(({ value }) => value === endTime.substr(endTime.length - 2));

  useEffect(() => {
    const fetchUserSchedule = async () => {
      try {
        const startOfweek = moment(day, "YYYY-MM-DD")
          .startOf("week")
          .format("YYYY-MM-DD");
        const { workingHours, booked } = await service.userService.getUserSchedule(comforterId, startOfweek);
        setBusy(processingBusyTimes(booked));
        setWorkingHoursData(workingHours);
      } catch (error) {}
    };
    fetchUserSchedule();
  }, [comforterId, day]);

  const initialValues = {
    startTime: startTime.slice(0, -3),
    startTimePeriod,
    endTime: endTime.slice(0, -3),
    endTimePeriod,
    day: new Date(day)
  };

  const target = usePortal("modal");

  const minDate = moment().toString();

  const maxDate = moment()
    .startOf("week")
    .add(2, "week")
    .subtract(1, "day");

  return createPortal(
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        const { day, startTime, startTimePeriod, endTime, endTimePeriod } = values;

        const foramtedDay = moment(day).format("YYYY-MM-DD");
        const orderTime = moment(`${foramtedDay} ${startTime} ${startTimePeriod.value}`, "YYYY-MM-DD hh:mm A");

        if (moment().diff(orderTime, "hours") > 0) {
          setFieldError("day", "Can't pick past time");
          setSubmitting(false);
        } else {
          const formatedStartTime = moment(
            `${foramtedDay} ${startTime} ${startTimePeriod.value}`,
            "YYYY-MM-DD hh:mm A"
          );
          const formatedEndTime = moment(`${foramtedDay} ${endTime} ${endTimePeriod.value}`, "YYYY-MM-DD hh:mm A");

          if (!formatedStartTime.isBefore(formatedEndTime)) {
            setFieldError("startTime", "Start must be less");
            setSubmitting(false);
          } else {
            const dates = getDatesArrayBetweenDates(
              formatedStartTime.format("d-HH:00"),
              formatedEndTime.format("d-HH:00"),
              "d-HH:00"
            );
            dates.pop();

            const filteredWorkingHours = workingHours.filter(time => time.includes(`${moment(day).format("d")}-`));

            if (!dates.every(e => filteredWorkingHours.includes(e))) {
              setFieldError("startTime", "Unavailable hours selected");
              setFieldError("endTime", "Unavailable hours selected");
              setSubmitting(false);
            } else {
              const formatedBusyTime = busy.map(time => moment(time, "YYYY-MM-DD:HH-mm").format("d-HH:00"));
              if (dates.some(e => formatedBusyTime.includes(e))) {
                setFieldError("startTime", "Booked hours selected");
                setFieldError("endTime", "Booked hours selected");
                setSubmitting(false);
              } else {
                onSubmit({
                  ...values,
                  startTimePeriod: values.startTimePeriod.value,
                  endTimePeriod: values.endTimePeriod.value
                });
                setSubmitting(false);
                onCancel(false);
              }
            }
          }
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting }) => {
        return (
          <div className={style.dialog}>
            <div className={style.inner}>
              <div className={style.dialogHeader}>
                <h4 className={style.dialogTitle}>Confirm time</h4>
                <button className={style.dialogCloseButton} onClick={onCancel} type="button">
                  <CloseIcon />
                </button>
              </div>
              <div className={style.dialogTimeWrapper}>
                <div className={style.dialogInputWrapper}>
                  <TextMaskInput
                    className={style.dialogInput}
                    mask={[/\d/, /\d/, ":", /\d/, /\d/]}
                    name="startTime"
                    label="Start"
                    value={values.startTime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.startTime && touched.startTime}
                  />
                  <Dropdown
                    className={style.dialogPeriod}
                    id="startTimePeriod"
                    name="startTimePeriod"
                    value={values.startTimePeriod}
                    options={timePeriods}
                    onChange={val => setFieldValue("startTimePeriod", val)}
                    onBlur={handleBlur}
                    error={errors.startTimePeriod && touched.startTimePeriod}
                  />
                  {errors.startTime && touched.startTime && (
                    <span className={style.dialogError}>{errors.startTime}</span>
                  )}
                </div>
                <span />
                <div className={style.dialogInputWrapper}>
                  <TextMaskInput
                    className={style.dialogInput}
                    mask={[/\d/, /\d/, ":", /\d/, /\d/]}
                    name="endTime"
                    label="Finish"
                    value={values.endTime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.endTime && touched.endTime}
                  />
                  <Dropdown
                    className={style.dialogPeriod}
                    id="endTimePeriod"
                    name="endTimePeriod"
                    value={values.endTimePeriod}
                    onChange={val => setFieldValue("endTimePeriod", val)}
                    options={timePeriods}
                    error={errors.endTimePeriod && touched.endTimePeriod}
                  />
                  {errors.endTime && touched.endTime && <span className={style.dialogError}>{errors.endTime}</span>}
                </div>
              </div>
              <InputDate
                className={style.dialogDateInput}
                label="Date"
                name="day"
                value={values.day}
                onChange={selectedValue => {
                  setFieldValue("day", selectedValue);
                }}
                minDate={new Date(minDate)}
                maxDate={new Date(maxDate)}
                onBlur={handleBlur}
                error={errors.day}
                errorMessage={errors.day && touched.day && errors.day}
              />
              <Button
                type="button"
                onClick={handleSubmit}
                className={style.dialogSaveButton}
                disabled={isSubmitting || errors.startTime !== undefined || errors.endTime !== undefined}
              >
                Save
              </Button>
            </div>
          </div>
        );
      }}
    </Formik>,
    target
  );
};

ConfirmTimeForm.propTypes = {
  comforterId: PropTypes.number.isRequired,
  startTime: PropTypes.string,
  day: PropTypes.string.isRequired,
  endTime: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};

ConfirmTimeForm.defaultProps = {
  startTime: "09:00 AM",
  endTime: "01:00 PM",
  onSubmit: () => {},
  onCancel: () => {}
};

export default ConfirmTimeForm;
