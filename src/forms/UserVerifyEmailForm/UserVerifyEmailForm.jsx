import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { string, object } from "yup";
import classNames from "classnames";

import styles from "./UserVerifyEmailForm.module.scss";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const UserVerifyEmailFormSchema = object().shape({
  email: string()
    .email("Invalid email")
    .required("Required")
});

const UserVerifyEmailForm = props => {
  return (
    <Formik
      initialValues={{ email: props.email || "" }}
      validationSchema={UserVerifyEmailFormSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          props.onSubmit(values.email);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <h3 className={classNames("textC", styles.mainTitle)}>Verify your mail!</h3>
          <p className={classNames(styles.description, "smallText", "textC")}>
            In order to proceed you need to confirm your registration. We will send you a code which
            need to be entered in order to confirm you contact data.
          </p>
          <div style={{ marginBottom: "30px" }}>
            <Input
              label="Your email:"
              autoComplete="email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email}
              errorMessage={errors.email && touched.email && errors.email}
            />
          </div>
          <Button type="submit" width="100%" disabled={isSubmitting}>
            Send a mail
          </Button>
        </form>
      )}
    </Formik>
  );
};

UserVerifyEmailForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default UserVerifyEmailForm;
