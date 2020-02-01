import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { paths } from "../../routes";

import { string, object } from "yup";

import styles from "./UserLoginForm.module.scss";

import Input from "../../components/Input/Input";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import Button from "../../components/Button/Button";

import love from "../../images/auth/love.svg";

const SignInSchema = object().shape({
  email: string()
    .email("Invalid email")
    .required("Required"),
  password: string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

const UserLoginForm = props => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SignInSchema}
      onSubmit={(values, { setSubmitting }) => {
        props.userSignInRequest(values);
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
        <form onSubmit={handleSubmit} className={styles.formWrapper}>
          <img
            className={styles.formImage}
            src={love}
            alt="Welcome to Your Comforters"
          />
          <h1 className={classNames("textC", styles.title)}>
            Welcome to Your Comforters
          </h1>
          <h3 className={classNames("textC", styles.description)}>
            Please sign in to proceed:
          </h3>
          <div style={{ marginBottom: "30px" }}>
            <Input
              label="Email address"
              autoComplete="username"
              placeholder="Enter your email"
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
          <div style={{ marginBottom: "4px" }}>
            <PasswordInput
              label="Password"
              autoComplete="current-password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password && touched.password}
              errorMessage={
                errors.password && touched.password && errors.password
              }
              underline
            />
          </div>
          <Link to={paths.passwordRecovery}>
            <p className={styles.forgotButton}>Forgot your password?</p>
          </Link>
          <div style={{ marginTop: "40px" }}>
            <Button
              style={{ margin: "0 auto", width: "184px" }}
              type="submit"
              width="156px"
              disabled={isSubmitting}
            >
              Sign in
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

UserLoginForm.propTypes = {
  userSignInRequest: PropTypes.func.isRequired
};

export default UserLoginForm;
