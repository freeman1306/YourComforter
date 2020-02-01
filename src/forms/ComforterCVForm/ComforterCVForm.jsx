import React from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";

import styles from "./ComforterCVForm.module.scss";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const ComforterCVForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
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
        onClick={handleReset}
        style={{ width: "100%", maxWidth: "328px", marginRight: "16px" }}
        buttonStyle="secondary"
      >
        Cancel
      </Button>
      <Button type="submit" disabled={isSubmitting} style={{ width: "100%", maxWidth: "328px" }}>
        Save
      </Button>
    </div>
  </form>
);

ComforterCVForm.propTypes = {
  cvLink: PropTypes.string,
  onSave: PropTypes.func.isRequired
};

ComforterCVForm.defaultProps = {
  cvLink: ""
};

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({ data }) => ({ cvLink: data }),
  handleSubmit: ({ cvLink }, { setSubmitting, props: { onSave } }) => {
    onSave(cvLink);
    setSubmitting(false);
  },
  displayName: "EditCVForm"
})(ComforterCVForm);
