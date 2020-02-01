import React from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";

import styles from "./ComforterRegistrationStep4Form.module.scss";

import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import service from "../../../service";

const ComforterRegistrationStep4Form = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  onBack,
  isSubmitting
}) => (
  <form onSubmit={handleSubmit}>
    <div className={styles.wrapper}>
      <Input
        name="cvLink"
        type="text"
        label="CV link"
        className={styles.cvInput}
        value={values.cvLink}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.cvLink && touched.cvLink}
        errorMessage={errors.cvLink && touched.cvLink && errors.cvLink}
      />
    </div>
    <div className={styles.btnWrap}>
      <Button
        type="button"
        disabled={isSubmitting}
        onClick={onBack}
        style={{ width: "100%", maxWidth: "328px", marginRight: "16px" }}
        buttonStyle="secondary"
      >
        Back
      </Button>
      <Button type="submit" disabled={isSubmitting} style={{ width: "100%", maxWidth: "328px" }}>
        Next step
      </Button>
    </div>
  </form>
);

ComforterRegistrationStep4Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};

export default withFormik({
  mapPropsToValues: ({ data }) => ({ cvLink: data.cvLink ? data.cvLink : "" }),
  handleSubmit: ({ cvLink }, { setSubmitting, props }) => {
    service.userService.editUserCV(props.user.id, cvLink, props.user.token).then(() => {
      setSubmitting(false);
      props.onSubmit();
    });
  },
  displayName: "ComforterRegistrationStep4Form"
})(ComforterRegistrationStep4Form);
