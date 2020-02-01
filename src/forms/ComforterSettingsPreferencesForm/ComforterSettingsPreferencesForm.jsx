import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { object, string, boolean } from "yup";
import { withFormik } from "formik";

import styles from "./ComforterSettingsPreferencesForm.module.scss";

import Dropdown from "../../components/Dropdown/Dropdown";
import Radio from "../../components/RadioButton/RadioButton";
import Button from "../../components/Button/Button";
import Textarea from "../../components/Textarea/Textarea";
import Input from "../../components/Input/Input";
import { workPlaceOptions, genderOptions } from "../../helpers/options";

const validationSchema = object().shape({
  allergies: boolean(),
  communicationPreferences: string(),
  workPlacePreferences: string(),
  genderPreferences: string(),
  allergiesNotes: string().nullable(),
  agePreferences: string().nullable(),
  nationalityPreferences: string().nullable()
});

const ComforterSettingsPreferencesForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
  handleReset,
  isSubmitting
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <h3>Form file preferences</h3>

        <div className={styles.filePreferencesWrap}>
          <div className={styles.left}>
            <div className={classNames(styles.communicationPref, styles.filePreferencesItem)}>
              <span>Сommunication preferences:</span>
              <div className={styles.communicationPrefBtnWrap}>
                <Radio
                  label="Mail"
                  name="communicationPreferences"
                  id="communicationPreferencesMail"
                  onChange={() => setFieldValue("communicationPreferences", "mail")}
                  checked={values.communicationPreferences === "mail"}
                  onBlur={handleBlur}
                />
                <Radio
                  label="Phone"
                  name="communicationPreferences"
                  id="communicationPreferencesPhone"
                  onChange={() => setFieldValue("communicationPreferences", "phone")}
                  checked={values.communicationPreferences === "phone"}
                  onBlur={handleBlur}
                />
                <Radio
                  label="Text messages"
                  name="communicationPreferences"
                  id="communicationPreferencesTextMessages"
                  onChange={() => setFieldValue("communicationPreferences", "text_messages")}
                  checked={values.communicationPreferences === "text_messages"}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div className={styles.filePreferencesItem}>
              <Dropdown
                label="Work place preferences"
                id="workPlacePreferences"
                name="workPlacePreferences"
                options={workPlaceOptions}
                value={values.workPlacePreferences}
                onChange={val => setFieldValue("workPlacePreferences", val)}
              />
            </div>

            <h3 className={styles.personalInfoTitle}>Personal information about professional</h3>

            <div className={classNames(styles.dropdownWrap, styles.filePreferencesItem)}>
              <div className={styles.margin}>
                <Dropdown
                  label="Gender"
                  id="genderPreferences"
                  name="genderPreferences"
                  options={genderOptions}
                  value={values.genderPreferences}
                  onChange={val => setFieldValue("genderPreferences", val)}
                />
              </div>
              <div className={styles.margin}>
                <Input
                  label="Age"
                  name="agePreferences"
                  type="number"
                  value={values.agePreferences || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.agePreferences && touched.agePreferences}
                  errorMessage={errors.agePreferences && touched.agePreferences && errors.agePreferences}
                />
              </div>
              <div className={styles.margin}>
                <Input
                  label="Nationality"
                  name="nationalityPreferences"
                  value={values.nationalityPreferences || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.nationalityPreferences && touched.nationalityPreferences}
                  errorMessage={
                    errors.nationalityPreferences && touched.nationalityPreferences && errors.nationalityPreferences
                  }
                />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={classNames(styles.medConditions, styles.filePreferencesItem)}>
              <span>Medical conditions, allergies:</span>
              <div className={styles.medConditionsBtnWrap}>
                <Radio
                  label="Yes"
                  name="allergies"
                  id="allergiesYes"
                  onChange={() => setFieldValue("allergies", true)}
                  checked={values.allergies === true}
                  onBlur={handleBlur}
                />
                <Radio
                  label="No"
                  name="allergies"
                  id="allergiesNo"
                  onChange={() => setFieldValue("allergies", false)}
                  checked={values.allergies === false}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div className={classNames(styles.textareaWrap, styles.filePreferencesItem)}>
              <Textarea
                style={{ height: "190px" }}
                name="allergiesNotes"
                label="Medical conditions, allergies notes"
                value={values.allergiesNotes || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.allergiesNotes && touched.allergiesNotes}
                errorMessage={errors.allergiesNotes && touched.allergiesNotes && errors.allergiesNotes}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btnWrap}>
        <Button
          type="button"
          style={{ width: "100%", maxWidth: "328px", marginRight: "16px" }}
          onClick={handleReset}
          disabled={isSubmitting}
          buttonStyle="secondary"
        >
          Cancel
        </Button>
        <Button type="submit" style={{ width: "100%", maxWidth: "328px" }} disabled={isSubmitting}>
          Save
        </Button>
      </div>
    </form>
  );
};

ComforterSettingsPreferencesForm.propTypes = {
  data: PropTypes.shape({
    communicationPreferences: PropTypes.string,
    allergies: PropTypes.bool,
    allergiesNotes: PropTypes.string,
    workPlacePreferences: PropTypes.string,
    genderPreferences: PropTypes.string,
    agePreferences: PropTypes.any,
    nationalityPreferences: PropTypes.string
  }),
  onSave: PropTypes.func
};

ComforterSettingsPreferencesForm.defaultProps = {
  data: {
    communicationPreferences: "",
    allergies: false,
    allergiesNotes: "",
    workPlacePreferences: "",
    genderPreferences: "",
    agePreferences: "",
    nationalityPreferences: ""
  },
  onSave: values =>
    new Promise(resolve => {
      resolve("success", values);
    })
};

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({ data }) => ({
    ...data,
    genderPreferences: genderOptions.find(option => option.value.toLowerCase() === data.genderPreferences),
    workPlacePreferences: workPlaceOptions.find(
      option => option.value.toLowerCase().replace(/ /g, "_") === data.workPlacePreferences
    )
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props
      .onSave({
        ...values,
        genderPreferences: values.genderPreferences.value.toLowerCase(),
        workPlacePreferences: values.workPlacePreferences.value.toLowerCase().replace(/ /g, "_")
      })
      .finally(() => setSubmitting(false));
  },
  validationSchema,
  displayName: "ComforterPreferencesForm"
})(ComforterSettingsPreferencesForm);
