import React from "react";
import PropTypes from "prop-types";
import { object, string } from "yup";
import { Formik } from "formik";
import moment from "moment";

import styles from "./ComforterRegistrationStep2Form.module.scss";
import Input from "../../../components/Input/Input";
import Dropdown from "../../../components/Dropdown/Dropdown";
import InputDate from "../../../components/InputDate/InputDate";
import Radio from "../../../components/RadioButton/RadioButton";
import Button from "../../../components/Button/Button";
import service from "../../../service";
import { countryOptions, stateOptions } from "../../../helpers/options";

const validationSchema = object().shape({
  licenseNumber: string()
    .nullable()
    .required("Required"),
  licenseCountry: object().required("Required"),
  expiryDate: string()
    .notOneOf(["--/--/----"], "Required")
    .required("Required"),
  vehicleType: string().nullable(),
  vehicleLicense: string().nullable(),
  issueCountry: object(),
  issueState: object(),
  insurance: string()
});

const ComforterRegistrationStep2Form = ({ onBack, onSubmit, user, data }) => {
  const initialValues = {
    ...data,
    licenseCountry: countryOptions.find(({ value }) => data.licenseCountry === value),
    issueCountry: countryOptions.find(({ value }) => data.issueCountry === value),
    issueState: stateOptions.find(({ value }) => data.issueState === value),
    expiryDate: data.expiryDate ? new Date(data.expiryDate) : "--/--/----"
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        const data = {
          ...values,
          expiryDate: moment(values.expiryDate).format("YYYY-MM-DD"),
          licenseCountry: values.licenseCountry ? values.licenseCountry.value : "",
          issueCountry: values.issueCountry ? values.issueCountry.value : "",
          issueState: values.issueState ? values.issueState.value : ""
        };
        service.userService.editUserData(user.id, data, user.token).then(() => {
          setSubmitting(false);
          onSubmit();
        });
      }}
    >
      {({ values, touched, errors, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <div className={styles.wrapper}>
            <div className={styles.licenseDataWrap}>
              <h3>Driver license data</h3>
              <div className={styles.licenseData}>
                <div className={styles.licenseDataItem}>
                  <Input
                    label="Number (Required)"
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
                    label="Country (Required)"
                    id="country"
                    name="licenseCountry"
                    options={countryOptions}
                    value={values.licenseCountry}
                    onChange={val => setFieldValue("licenseCountry", val)}
                    onBlur={handleBlur}
                    error={errors.licenseCountry && touched.licenseCountry}
                    errorMessage={errors.licenseCountry && touched.licenseCountry && errors.licenseCountry}
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
              <h3>Vehicle details:</h3>
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
                    value={values.issueCountry}
                    onChange={val => setFieldValue("issueCountry", val)}
                  />
                </div>
                <div className={styles.vehicleDetailsItem}>
                  <Dropdown
                    label="Issue state"
                    id="issueState"
                    name="issueState"
                    options={stateOptions}
                    value={values.issueState}
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
      )}
    </Formik>
  );
};

ComforterRegistrationStep2Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};

export default ComforterRegistrationStep2Form;
