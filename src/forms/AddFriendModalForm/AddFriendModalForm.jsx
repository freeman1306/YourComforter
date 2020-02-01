import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { withFormik } from "formik";
import { string, object, array } from "yup";

import styles from "./AddFriendModalForm.module.scss";

import service from "../../service";

import { ReactComponent as Close } from "../../icons/close-icon.svg";
import { ReactComponent as Left } from "../../icons/arrow-left.svg";

import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import InputDate from "../../components/InputDate/InputDate";
import Dropdown from "../../components/Dropdown/Dropdown";
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/Button/Button";
import CheckboxGroup from "../../components/CheckboxGroup/CheckboxGroup";
import AutocompleteInput from "../../components/AutocompleteInput/AutocompleteInput";
import { genderOptions } from "../../helpers/options";

const FriendSchema = object().shape({
  firstName: string().required("Required"),
  lastName: string().required("Required"),
  sex: string().required("Required"),
  district: array().required("Required"),
  address: string(),
  birthday: string().required("Required"),
  medicalConditions: string(),
  service_ids: array().required("At least one service is required")
});

const AddFriendModalForm = ({
  onClose,
  services,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
  setFieldTouched
}) => {
  const [suggestions, setSuggestions] = useState([]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <button type="button" className={styles.closeModal} onClick={onClose}>
          <Close />
        </button>

        <div className={styles.topModal}>
          <div className={styles.titleWrap}>
            <button type="button" onClick={onClose} className={styles.backLink}>
              <Left />
            </button>
            <h3 className={styles.title}>Trusted companion friend data</h3>
          </div>

          <div className={styles.mainDataWrap}>
            <div className={styles.mainDataWrapTop}>
              <Input
                label="First name (Required)"
                type="text"
                name="firstName"
                className={styles.input}
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.firstName && touched.firstName}
                errorMessage={errors.firstName && touched.firstName && errors.firstName}
              />
              <Input
                label="Last name (Required)"
                type="text"
                name="lastName"
                className={styles.input}
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.lastName && touched.lastName}
                errorMessage={errors.lastName && touched.lastName && errors.lastName}
              />
            </div>
            <div className={styles.mainDataWrapBottom}>
              <Dropdown
                label="Gender (Required)"
                id="sex"
                className={styles.input}
                options={genderOptions}
                value={values.sex}
                onChange={val => setFieldValue("sex", val)}
                onBlur={handleBlur}
                error={errors.sex && touched.sex}
                errorMessage={errors.sex && touched.sex && errors.sex}
              />
              <InputDate
                label="Date of birth"
                id="birthday"
                className={styles.bottomInfoText}
                value={values.birthday}
                onChange={val => setFieldValue("birthday", val)}
                onBlur={handleBlur}
                error={errors.birthday && touched.birthday}
                errorMessage={errors.birthday && touched.birthday && errors.birthday}
              />
            </div>
          </div>

          <div className={styles.textareaWrap}>
            <Textarea
              label="Medical conditions"
              name="medicalConditions"
              className={styles.medicalText}
              value={values.medicalConditions}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.medicalConditions && touched.medicalConditions}
              errorMessage={errors.medicalConditions && touched.medicalConditions && errors.medicalConditions}
            />
          </div>
        </div>
        <div className={styles.bottomModal}>
          <div className={styles.locationWrap}>
            <AutocompleteInput
              label="Neighborhood (Required)"
              name="district"
              className={styles.input}
              value={values.district}
              handleAddition={tag => {
                const district = [...values.district, tag];
                setFieldValue("district", district);
              }}
              handleDelete={i => {
                const district = values.district.slice(0);
                district.splice(i, 1);
                setFieldValue("district", district);
              }}
              handleBlur={() => {
                setFieldTouched("district", true, true);
              }}
              handleInputChange={async input => {
                if (input.length >= 1) {
                  const districts = await service.seekerService.getDistrict(input);
                  setSuggestions(districts);
                } else setSuggestions([]);
              }}
              suggestions={suggestions}
              handleValidate={() => values.district.length < 1}
              error={errors.district && touched.district}
              errorMessage={(errors.district && touched.district && errors.district)? "Enter the first two letters and choose from suggestions": ""}
            />
            <Input
              label="Address"
              type="text"
              name="address"
              className={styles.input}
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.address && touched.address}
              errorMessage={errors.address && touched.address && errors.address}
            />
          </div>

          <div className={styles.servicesWrap}>
            <p>Services interested (Required)</p>

            <CheckboxGroup
              id="service_ids"
              className={styles.checkWrap}
              value={values.service_ids}
              error={errors.service_ids}
              touched={touched.service_ids}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
            >
              {services.map(service => (
                <div className={styles.checkboxWrap} key={service.id}>
                  <Checkbox
                    name="service_ids"
                    id={`service-${service.id}`}
                    label={service.name}
                    value={service.id}
                    className={styles.ServicePreferences}
                    checked={values["service_ids"].includes(service.id)}
                    onChange={()=>{}}
                  />
                </div>
              ))}
            </CheckboxGroup>
          </div>
          <div className={styles.btnWrap}>
            <Button buttonStyle="secondary" type="button" onClick={onClose} className={styles.cancel}>
              Cancel
            </Button>
            <Button type="submit" onClick={handleSubmit} className={styles.save}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

AddFriendModalForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  )
};

export default withFormik({
  mapPropsToValues: ({ values }) => {
    if (values) {
      let resiverServices;
      values.services ? (resiverServices = values.services.map(el => el.id)) : (resiverServices = values.service_ids);
      return {
        firstName: values.firstName,
        lastName: values.lastName,
        sex: values.sex ? genderOptions.find(option => option.value.toLowerCase() === values.sex) : "",
        district: [{ name: values.district }],
        address: values.address,
        birthday: moment(values.birthday, "DD-MM-YYYY").toDate(),
        medicalConditions: values.medicalConditions,
        service_ids: [...resiverServices]
      };
    } else
      return {
        firstName: "",
        lastName: "",
        sex: "",
        district: [],
        address: "",
        birthday: new Date(),
        medicalConditions: "",
        service_ids: []
      };
  },
  validationSchema: FriendSchema,

  handleSubmit: (values, { props }) => {
    props.onSave({
      ...values,
      sex: values.sex.value.toLowerCase(),
      birthday: moment(values.birthday).format("DD.MM.YY"),
      district: values.district[0].name
    });
  },

  displayName: "AddFriendModalForm"
})(AddFriendModalForm);
