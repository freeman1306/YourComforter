import React from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";
import { string, object } from "yup";

import styles from "./RejectJobModalForm.module.scss";
import {subjectLineOptions} from "../../helpers/options";

import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";

const RejectJobModalForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, onCancel, setFieldValue }) => {
  return (
    <form className={styles.rejectJobModalForm} style={{zIndex:1000}} onSubmit={handleSubmit}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h3 className={styles.title}>Reject job</h3>
          <div className={styles.subtitle}>You can reject job here.</div>
        </div>
        <div className={styles.content}>
        <Dropdown
          name="subject"
          id="subjectLine"
          label="Subject line"
          options={subjectLineOptions}
          value={values.subject}
          onChange={val => setFieldValue("subject", val)}
          onBlur={handleBlur}
          error={errors.report && touched.report}
          errorMessage={errors.report && touched.report && errors.report}
        />
          <Textarea
            style={{
              height: "124px"
            }}
            name="report"
            label="Please discribe your problem"
            value={values.report}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.report && touched.report}
            errorMessage={errors.report && touched.report && errors.report}
          />
        </div>
        <div className={styles.footer}>
          <Button type="button" width="100%" buttonStyle="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" width="100%">
            Send
          </Button>
        </div>
      </div>
    </form>
  );
};

RejectJobModalForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired
};

export default withFormik({
  mapPropsToValues: () => ({
    report: "",
    subject: {}
  }),
  validationSchema: () =>
    object().shape({
      report: string().required("Required"),
      subject: object().required("Required")
    }),
  handleSubmit: (values, { props: { onSend } }) => {
    onSend(values);
  }
})(RejectJobModalForm);
