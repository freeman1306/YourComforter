import React from "react";
import { withFormik } from "formik";
import { string, object, ref } from "yup";

import styles from "./UserChangePasswordForm.module.scss";

import PasswordInput from "../../components/PasswordInput/PasswordInput";
import Button from "../../components/Button/Button";
import service from "../../service";
import { withModal, Modal } from "../../context/ModalContext";

const validationSchema = object().shape({
  oldPassword: string()
    .min(8, "Should be 8 chars minimum.")
    .required("Required"),
  newPassword: string()
    .min(8, "Should be 8 chars minimum.")
    .required("Required"),
  newPasswordConfirm: string()
    .oneOf([ref("newPassword"), null], "Passwords must match")
    .required("Required")
});

const UserChangePasswordForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleReset,
  handleSubmit,
  isSubmitting,
  context
}) => {

  return (
    <>
      <Modal
        id="changePassword"
        icon="congratulation"
        type="dialog"
        title="Congratulation"
        subtitle="Your password has been successfully changed"
        CancelButton={
          <Button
            buttonStyle="secondary"
            onClick={context.closeModal}
          >
            Ok
          </Button>
        }
      />
      <form className={styles.changePassWrap} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <div className={styles.marginTop}>
            <PasswordInput
              label="Old password"
              autoComplete="current-password"
              name="oldPassword"
              placeholder="Enter your password"
              value={values.oldPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.oldPassword && touched.oldPassword}
              errorMessage={errors.oldPassword && touched.oldPassword && errors.oldPassword}
            />
          </div>

          <div className={styles.marginTop}>
            <PasswordInput
              label="New password"
              autoComplete="new-password"
              name="newPassword"
              placeholder="Enter new password"
              value={values.newPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.newPassword && touched.newPassword}
              errorMessage={errors.newPassword && touched.newPassword && errors.newPassword}
            />
          </div>

          <div className={styles.marginTop}>
            <PasswordInput
              label="Confirm password"
              autoComplete="new-password"
              name="newPasswordConfirm"
              placeholder="Confirm new password"
              value={values.newPasswordConfirm}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.newPasswordConfirm && touched.newPasswordConfirm}
              errorMessage={
                errors.newPasswordConfirm && touched.newPasswordConfirm && errors.newPasswordConfirm
              }
            />
          </div>
        </div>
        <div className={styles.btnWrap}>
          <Button
            type="button"
            disabled={isSubmitting}
            style={{ width: "100%", maxWidth: "328px", marginRight: "16px" }}
            onClick={handleReset}
            buttonStyle="secondary"
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting} style={{ width: "100%", maxWidth: "328px" }}>
            Save
          </Button>
        </div>
      </form>
    </>
  );
};

export default withModal(
  withFormik({
    mapPropsToValues: () => ({ oldPassword: "", newPassword: "", newPasswordConfirm: "" }),
    handleSubmit: (values, { props, setSubmitting, setFieldError, resetForm }) => {
      service.userService
        .editUserPassword(values.oldPassword, values.newPassword)
        .then(res => {
          if (res.status !== 200) {
            setFieldError("oldPassword", res.data.message);
          } else {
            props.context.toogleModal("changePassword");
            resetForm();
          }
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
    validationSchema,
    displayName: "ChangePasswordForm"
  })(UserChangePasswordForm)
);
