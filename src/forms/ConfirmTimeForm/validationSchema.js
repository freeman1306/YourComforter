import { string, object, date } from "yup";

const Schema = object().shape({
  startTime: string()
    .matches(/^((1[0-2]|0?[1-9]):([0-5][0-9]))$/, "Format (00:00 AM or PM)")
    .required("Required"),
  startTimePeriod: object()
    .shape({
      id: string(),
      value: string()
    })
    .required("Required"),
  endTime: string()
    .matches(/^((1[0-2]|0?[1-9]):([0-5][0-9]))$/, "Format (00:00 AM or PM)")
    .required("Required"),
  endTimePeriod: object()
    .shape({
      id: string(),
      value: string()
    })
    .required("Required"),
  day: date().required("Required")
});

export default Schema;
