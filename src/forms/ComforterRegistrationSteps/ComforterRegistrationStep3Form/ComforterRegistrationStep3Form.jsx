import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { object, string, bool } from "yup";
import { withFormik } from "formik";
import styles from "./ComforterRegistrationStep3Form.module.scss";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Radio from "../../../components/RadioButton/RadioButton";
import Button from "../../../components/Button/Button";
import Textarea from "../../../components/Textarea/Textarea";
import Input from "../../../components/Input/Input";
import RadioButtonGroup from "../../../components/RadioButtonGroup/RadioButtonGroup";
import service from "../../../service";
import { workPlaceOptions, genderOptions } from "../../../helpers/options";

const validationSchema = object().shape({
  allergies: bool().required("Required"),
  communicationPreferences: string().required("Required"),
  workPlacePreferences: string(),
  genderPreferences: string(),
  allergiesNotes: string()
    .when("allergies", (allergies, schema) => (allergies ? schema.required("Required") : schema))
    .nullable(),
  agePreferences: string().nullable(),
  nationalityPreferences: string().nullable()
});

const ComforterRegistrationStep3Form = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
  onBack,
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
              <RadioButtonGroup
                className={styles.communicationPrefBtnWrap}
                classNameError={styles.communicationPrefBtnWrapError}
                error={errors.communicationPreferences}
                touched={touched.communicationPreferences}
              >
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
              </RadioButtonGroup>
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

            <h3 className={styles.personalInfoTitle}>Personal preferences</h3>

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
              <RadioButtonGroup
                className={styles.medConditionsBtnWrap}
                classNameError={styles.medConditionsBtnWrapError}
                error={errors.allergies}
                touched={touched.allergies}
              >
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
              </RadioButtonGroup>
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
          onClick={onBack}
          disabled={isSubmitting}
          buttonStyle="secondary"
        >
          Back
        </Button>
        <Button type="submit" style={{ width: "100%", maxWidth: "328px" }} disabled={isSubmitting}>
          Next step
        </Button>
      </div>
    </form>
  );
};

ComforterRegistrationStep3Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};

export default withFormik({
  mapPropsToValues: ({ data }) => ({
    ...data,
    communicationPreferences: data.communicationPreferences ? data.communicationPreferences : "",
    genderPreferences: data.genderPreferences
      ? genderOptions.find(option => option.value.toLowerCase() === data.genderPreferences)
      : "",
    workPlacePreferences: data.workPlacePreferences
      ? workPlaceOptions.find(option => option.value.toLowerCase().replace(/ /g, "_") === data.workPlacePreferences)
      : ""
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    const data = {
      ...values,
      genderPreferences:
        values.genderPreferences !== "" ? values.genderPreferences.value.toLowerCase() : values.genderPreferences,
      workPlacePreferences:
        values.workPlacePreferences !== ""
          ? values.workPlacePreferences.value.toLowerCase().replace(/ /g, "_")
          : values.workPlacePreferences
    };
    service.userService.editUserData(props.user.id, data, props.user.token).then(() => {
      setSubmitting(false);
      props.onSubmit();
    });
  },
  validationSchema,
  displayName: "ComforterRegistrationStep3Form"
})(ComforterRegistrationStep3Form);
