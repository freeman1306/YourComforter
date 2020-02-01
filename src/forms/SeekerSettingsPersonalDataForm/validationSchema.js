import { object, string, array, number } from "yup";

import { phoneRegExp } from "../../helpers/validation";

export default object().shape({
  id: number().required("Required"),
  firstName: string().required("Required"),
  lastName: string().required("Required"),
  description: string().required("Required").nullable(),
  email: string()
    .email("Invalid email")
    .required("Required"),
  sex: object().required("Required"),
  dayOfBirth: string().required("Required"),
  zipCode: number().nullable(),
  country: string().required("Required"),
  city: string().required("Required"),
  district: array().required("Required"),
  state: string().required("Required"),
  apartments: string().nullable(),
  street: string().nullable(),
  phone: string()
    .matches(phoneRegExp, "Phone number is not valid")
    .nullable(),
  pictures: array(),
  videoLink: string().nullable(),
  profileLink: string().url("Invalid url should start with http:// or https://").nullable()
});
