import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Formik } from "formik";

import { string, object, ref } from "yup";

import PasswordInput from "../../components/PasswordInput/PasswordInput";
import Button from "../../components/Button/Button";

const NewPasswordSchema = object().shape({
  newPassword: string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  confirmationPassword: string()
    .oneOf([ref("newPassword"), null], "Passwords don't match")
    .required("Confirm Password is required")
});

const UserNewPasswordForm = props => {
  return (
    <Formik
      initialValues={{ newPassword: "", confirmationPassword: "" }}
      validationSchema={NewPasswordSchema}
      onSubmit={(values, { setSubmitting }) => {
        props.userSubmitRequest(values)
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
          <h3 className={classNames("textC")}>Enter new password:</h3>
          <div style={{ marginBottom: "30px" }}>
            <div style={{ marginTop: "32px" }}>
              <PasswordInput
                name="newPassword"
                autoComplete="new-password"
                label="New password"
                placeholder="Enter new password"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.newPassword && touched.newPassword}
                errorMessage={errors.newPassword && touched.newPassword && errors.newPassword}
                underline
              />
            </div>
            <div style={{ marginTop: "23px" }}>
              <PasswordInput
                name="confirmationPassword"
                label="Confirm password"
                autoComplete="new-password"
                placeholder="Confirm password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                width="392px"
                error={errors.confirmationPassword && touched.confirmationPassword}
                errorMessage={
                  errors.confirmationPassword &&
                  touched.confirmationPassword &&
                  errors.confirmationPassword
                }
                underline
              />
            </div>
          </div>
          <div style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
            <Button
              style={{ width: "184px" }}
              type="submit"
              disabled={isSubmitting}
            >
              Save
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

UserNewPasswordForm.propTypes = {
  userSubmitRequest: PropTypes.func.isRequired,
  changeSubmitted: PropTypes.func,
  isSubmitted: PropTypes.bool.isRequired
};

export default UserNewPasswordForm;
