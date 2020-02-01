import React from "react";
import PropTypes from "prop-types";
import { object, string, boolean, number } from "yup";
import { withFormik } from "formik";
import moment from "moment";

import styles from "./ComforterSettingsDriversDataForm.module.scss";
import Input from "../../components/Input/Input";
import Dropdown from "../../components/Dropdown/Dropdown";
import InputDate from "../../components/InputDate/InputDate";
import Radio from "../../components/RadioButton/RadioButton";
import Button from "../../components/Button/Button";
import { countryOptions, stateOptions } from "../../helpers/options";

const validationSchema = object().shape({
  licenseNumber: number()
    .nullable()
    .required("Required"),
  licenseCountry: object()
    .nullable()
    .required("Required"),
  expiryDate: string()
    .notOneOf(["--/--/----"], "Required")
    .required("Required"),
  vehicleType: string().nullable(),
  vehicleLicense: string().nullable(),
  issueCountry: object().nullable(),
  issueState: object().nullable(),
  insurance: boolean()
});

const ComforterSettingsDriversDataForm = ({
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
        <div className={styles.licenseDataWrap}>
          <h3>Driver license data</h3>
          <div className={styles.licenseData}>
            <div className={styles.licenseDataItem}>
              <Input
                label="Number"
                placeholder="0123"
                type="number"
                name="licenseNumber"
                value={values.licenseNumber || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.licenseNumber && touched.licenseNumber}
                errorMessage={errors.licenseNumber && touched.licenseNumber && errors.licenseNumber}
              />
            </div>
            <div className={styles.licenseDataItem}>
              <Dropdown
                label="Country"
                id="country"
                name="licenseCountry"
                options={countryOptions}
                value={values.licenseCountry || ""}
                onChange={val => setFieldValue("licenseCountry", val)}
              />
            </div>
            <div className={styles.licenseDataItem}>
              <InputDate
                label="Expiry date (Required)"
                name="expiryDate"
                value={
                  String(moment(values.expiryDate, "YYYY-MM-DD").toDate()) === "Invalid Date"
                    ? values.expiryDate
                    : moment(values.expiryDate, "YYYY-MM-DD").toDate()
                }
                onChange={value => {
                  setFieldValue("expiryDate", moment(value).format("YYYY-MM-DD"));
                }}
                onClick={() => {
                  if (values.expiryDate === "--/--/----") {
                    setFieldValue("expiryDate", moment().format("YYYY-MM-DD"));
                  }
                }}
                onBlur={handleBlur}
                error={errors.expiryDate && touched.expiryDate}
                errorMessage={errors.expiryDate && touched.expiryDate && errors.expiryDate}
              />
            </div>
          </div>
        </div>

        <div className={styles.vehicleDetailsWrap}>
          <h3>Vehicle details(Optional):</h3>
          <div className={styles.vehicleDetails}>
            <div className={styles.vehicleDetailsItem}>
              <Input
                label="Vehicle type"
                placeholder="0123"
                type="text"
                name="vehicleType"
                value={values.vehicleType || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.vehicleType && touched.vehicleType}
                errorMessage={errors.vehicleType && touched.vehicleType && errors.vehicleType}
              />
            </div>
            <div className={styles.vehicleDetailsItem}>
              <Input
                label="Vehicle license"
                placeholder="0123"
                type="text"
                name="vehicleLicense"
                value={values.vehicleLicense || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.vehicleLicense && touched.vehicleLicense}
                errorMessage={errors.vehicleLicense && touched.vehicleLicense && errors.vehicleLicense}
              />
            </div>
            <div className={styles.vehicleDetailsItem}>
              <Dropdown
                label="Issue country"
                id="issueCountry"
                name="issueCountry"
                options={countryOptions}
                value={values.issueCountry || ""}
                onChange={val => setFieldValue("issueCountry", val)}
              />
            </div>
            <div className={styles.vehicleDetailsItem}>
              <Dropdown
                label="Issue state"
                id="issueState"
                name="issueState"
                options={stateOptions}
                value={values.issueState || ""}
                onChange={val => setFieldValue("issueState", val)}
              />
            </div>
            <div className={styles.vehicleDetailsItem}>
              <span className={styles.radioBtnTitle}>Insurance</span>
              <div className={styles.radioBtnWrap}>
                <Radio
                  label="Yes"
                  id="insuranceYes"
                  name="insurance"
                  onChange={() => setFieldValue("insurance", true)}
                  checked={values.insurance === true}
                  onBlur={handleBlur}
                />
                <Radio
                  label="No"
                  id="insuranceNo"
                  name="insurance"
                  onChange={() => setFieldValue("insurance", false)}
                  checked={values.insurance === false}
                  onBlur={handleBlur}
                />
              </div>
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

ComforterSettingsDriversDataForm.propTypes = {
  data: PropTypes.shape({
    licenseNumber: PropTypes.string,
    licenseCountry: PropTypes.string,
    expiryDate: PropTypes.string,
    vehicleType: PropTypes.string,
    vehicleLicense: PropTypes.string,
    issueCountry: PropTypes.string,
    issueState: PropTypes.string,
    insurance: PropTypes.bool
  }),
  onSave: PropTypes.func.isRequired
};

ComforterSettingsDriversDataForm.defaultProps = {
  data: {
    licenseNumber: "",
    licenseCountry: "",
    expiryDate: "",
    vehicleType: "",
    vehicleLicense: "",
    issueCountry: "",
    issueState: "",
    insurance: false
  }
};

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({ data }) => ({
    ...data,
    licenseCountry: countryOptions.find(({ value }) => data.licenseCountry === value),
    issueCountry: countryOptions.find(({ value }) => data.issueCountry === value),
    issueState: stateOptions.find(({ value }) => data.issueState === value),
    expiryDate: data.expiryDate ? new Date(data.expiryDate) : "--/--/----"
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props
      .onSave({
        ...values,
        expiryDate: moment(values.expiryDate).format("YYYY-MM-DD"),
        licenseCountry: values.licenseCountry ? values.licenseCountry.value : "",
        issueCountry: values.issueCountry ? values.issueCountry.value : "",
        issueState: values.issueState ? values.issueState.value : ""
      })
      .finally(() => setSubmitting(false));
  },
  validationSchema,
  displayName: "ComforterDriversDataForm"
})(ComforterSettingsDriversDataForm);
