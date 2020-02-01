import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Formik } from "formik";
import { withRouter } from "react-router-dom";

import { string, object } from "yup";

import styles from "./UserRecoveryPasswordForm.module.scss";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const RecoverySchema = object().shape({
  email: string()
    .email("Invalid email")
    .required("Required")
});

const UserRecoveryPasswordForm = props => {
  return !props.isSubmitted ? (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={RecoverySchema}
      onSubmit={(values, { setSubmitting }) => {
        props.userSubmitRequest(values);
        setSubmitting(false);
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
          <h3 className={classNames("textC", styles.description)}>
            Please enter your email to change your password:
          </h3>
          <div style={{ marginBottom: "30px" }}>
            <Input
              label="Email address"
              placeholder="Enter your email"
              autoComplete="email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email}
              errorMessage={errors.email && touched.email && errors.email}
              underline
            />
          </div>
          <div style={{ marginTop: "40px", display: "flex", justifyContent: "space-between" }}>
            <Button
              style={{ width: "45%" }}
              width="156px"
              disabled={isSubmitting}
              buttonStyle="secondary"
              onClick={props.history.goBack}
            >
              Back
            </Button>
            <Button style={{ width: "45%" }} type="submit" width="156px" disabled={isSubmitting}>
              Send email
            </Button>
          </div>
        </form>
      )}
    </Formik>
  ) : (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h3 className={classNames("textC", styles.description)}>
        Email has been sent, check you're inbox.
      </h3>
      <p style={{ fontSize: "12px" }}>
        Didn't receive the email?
        <span
          style={{ cursor: "pointer", color: "#6E378C" }}
          onClick={() => {
            props.changeSubmitted(false);
          }}
        >
          Request again
        </span>
      </p>
    </div>
  );
};

UserRecoveryPasswordForm.propTypes = {
  userSubmitRequest: PropTypes.func.isRequired,
  changeSubmitted: PropTypes.func,
  isSubmitted: PropTypes.bool.isRequired
};

export default withRouter(UserRecoveryPasswordForm);
