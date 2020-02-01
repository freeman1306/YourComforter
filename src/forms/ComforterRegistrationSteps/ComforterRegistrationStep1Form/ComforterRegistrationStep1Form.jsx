import React, { useState } from "react";
import classNames from "classnames";
import styles from "./ComforterRegistrationStep1Form.module.scss";
import { withFormik, Field } from "formik";
import { string, ref, object, array } from "yup";

import Button from "../../../components/Button/Button";
import Radio from "../../../components/RadioButton/RadioButton";
import Input from "../../../components/Input/Input";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Textarea from "../../../components/Textarea/Textarea";
import PasswordInput from "../../../components/PasswordInput/PasswordInput";
import InputDate from "../../../components/InputDate/InputDate";
import UserEditableImage from "../../../components/UserEditableImage/UserEditableImage";
import MaskedInput from "react-text-mask";

import AutocompleteInput from "../../../components/AutocompleteInput/AutocompleteInput";
import service from "../../../service";
import moment from "moment";
import RadioButtonGroup from "../../../components/RadioButtonGroup/RadioButtonGroup";
import {
  salutationOptions,
  genderOptions,
  countryOptions,
  stateOptions,
  cityOptions
} from "../../../helpers/options";
import { phoneRegExp } from "../../../helpers/validation";

const validationSchema = object().shape({
  first_name: string().max(20).required("Required"),
  last_name: string().max(20).required("Required"),
  email: string()
    .email("Invalid email")
    .required("Required"),
  sex: object().required("Required"),
  birthday: string()
    .notOneOf(["--/--/----"], "Required")
    .required("Required"),
  password: string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  confirm_password: string()
    .oneOf([ref("password")], "Passwords do not match")
    .required("Required"),
  description: string(),
  zip_code: string().max(16),
  country: object().required("Required"),
  state: object().required("Required"),
  city: object().required("Required"),
  district: array().required("Required"),
  street: string(),
  apartments: string(),
  phone: string().matches(phoneRegExp, "Phone number is not valid"),
  salutation: string().required("Required"),
  work_authorization: string().required("Required"),
  mobility: string().required("Required")
});

const ComforterRegistrationStep1Form = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
  setFieldTouched,
  isSubmitting
}) => {
  const [districtSuggestions, setDistrictSuggestions] = useState([]);
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formWrapper}>
        <div className={styles.personalData}>
          <h3>Personal data</h3>
          <div className={styles.personalDataWrapper}>
            <div className={styles.userEditableImageWrap}>
              <UserEditableImage
                src={values.avatar}
                onChange={selectedValue => {
                  setFieldValue("avatar", selectedValue);
                }}
                height="184px"
              />
            </div>
            <div className={styles.personalDataFormCenter}>
              <div className={classNames(styles.margin, styles.width33)}>
                <Dropdown
                  label="Salutation (Required)"
                  name="salutation"
                  id="salutation"
                  options={salutationOptions}
                  value={values.salutation}
                  onChange={val => setFieldValue("salutation", val)}
                  onBlur={handleBlur}
                  error={errors.salutation && touched.salutation}
                  errorMessage={errors.salutation && touched.salutation && errors.salutation}
                />
              </div>
              <div className={classNames(styles.margin, styles.width33)}>
                <Input
                  label="First name (Required)"
                  name="first_name"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.first_name && touched.first_name}
                  errorMessage={errors.first_name && touched.first_name && errors.first_name}
                />
              </div>
              <div className={classNames(styles.margin, styles.width33)}>
                <Input
                  label="Last name (Required)"
                  name="last_name"
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.last_name && touched.last_name}
                  errorMessage={errors.last_name && touched.last_name && errors.last_name}
                />
              </div>
              <div className={classNames(styles.margin, styles.width33)}>
                <Input
                  type="email"
                  label="Email (Required)"
                  autoComplete="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email}
                  errorMessage={errors.email && touched.email && errors.email}
                />
              </div>
              <div className={classNames(styles.margin, styles.width33)}>
                <Dropdown
                  label="Gender (Required)"
                  name="sex"
                  id="sex"
                  options={genderOptions}
                  value={values.sex}
                  onChange={val => setFieldValue("sex", val)}
                  onBlur={handleBlur}
                  error={errors.sex && touched.sex}
                  errorMessage={errors.sex && touched.sex && errors.sex}
                />
              </div>
              <div className={classNames(styles.margin, styles.width33)}>
                <InputDate
                  label="Date of birth (Required)"
                  name="birthday"
                  value={
                    String(moment(values.birthday, "YYYY-MM-DD").toDate()) === "Invalid Date"
                      ? values.birthday
                      : moment(values.birthday, "YYYY-MM-DD").toDate()
                  }
                  onChange={value => {
                    setFieldValue("birthday", moment(value).format("YYYY-MM-DD"));
                  }}
                  onClick={() => {
                    if (values.birthday === "--/--/----") {
                      setFieldValue("birthday", moment().format("YYYY-MM-DD"));
                    }
                  }}
                  onBlur={handleBlur}
                  error={errors.birthday && touched.birthday}
                  maxDate={new Date()}
                  errorMessage={errors.birthday && touched.birthday && errors.birthday}
                />
              </div>
              <div className={classNames(styles.margin, styles.width50)}>
                <PasswordInput
                  label="Password (Required)"
                  autoComplete="new-password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password && touched.password}
                  errorMessage={errors.password && touched.password && errors.password}
                />
              </div>
              <div className={classNames(styles.margin, styles.width50)}>
                <PasswordInput
                  label="Confirm password (Required)"
                  name="confirm_password"
                  autoComplete="new-password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.confirm_password && touched.confirm_password}
                  errorMessage={
                    errors.confirm_password && touched.confirm_password && errors.confirm_password
                  }
                />
              </div>
            </div>

            <div className={styles.personalDataFormRight}>
              <div className={styles.margin}>
                <Textarea
                  label="Personal bio"
                  name="description"
                  style={{ height: "143px" }}
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.description && touched.description}
                  errorMessage={errors.description && touched.description && errors.description}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contactData}>
          <h3>Contact personal data</h3>
          <div className={styles.contactDataWrapper}>
            <div className={styles.margin}>
              <Input
                label="ZIP/Postal code"
                name="zip_code"
                type="number"
                value={values.zip_code}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.zip_code && touched.zip_code}
                errorMessage={errors.zip_code && touched.zip_code && errors.zip_code}
              />
            </div>
            <div className={styles.margin}>
              <Dropdown
                label="Country (Required)"
                name="country"
                id="country"
                options={countryOptions}
                value={values.country}
                onChange={val => setFieldValue("country", val)}
                onBlur={handleBlur}
                error={errors.country && touched.country}
                errorMessage={errors.country && touched.country && errors.country}
              />
            </div>
            <div className={styles.margin}>
              <Dropdown
                label="State (Required)"
                name="state"
                id="state"
                options={stateOptions}
                value={values.state}
                onChange={val => setFieldValue("state", val)}
                onBlur={handleBlur}
                error={errors.state && touched.state}
                errorMessage={errors.state && touched.state && errors.state}
              />
            </div>
            <div className={styles.margin}>
              <Dropdown
                label="City (Required)"
                name="city"
                id="city"
                options={cityOptions}
                value={values.city}
                onChange={val => setFieldValue("city", val)}
                onBlur={handleBlur}
                error={errors.city && touched.city}
                errorMessage={errors.city && touched.city && errors.city}
              />
            </div>
            <div className={styles.margin} style={{minWidth: "20%"}} >
              <AutocompleteInput
                label="Neighborhood (Required)"
                name="district"
                placeholder={values.district.length>0 ? null : "Start typing..."}
                className={styles.input}
                value={values.district}
                disabled={values.district.length>0 ? true : false}
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
                  if (input.length > 0) {
                    const districts = await service.seekerService.getDistrict(input);
                    setDistrictSuggestions(districts);
                  } else setDistrictSuggestions([]);
                }}
                suggestions={districtSuggestions}
                handleValidate={() => values.district.length < 1}
                error={errors.district && touched.district}
                errorMessage={errors.district && touched.district && errors.district}
              />
            </div>
            <div className={styles.margin}>
              <Input
                label="Street"
                name="street"
                value={values.street}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.street && touched.street}
                errorMessage={errors.street && touched.street && errors.street}
              />
            </div>
            <div className={styles.margin}>
              <Input
                label="Apartments"
                name="apartments"
                type="number"
                value={values.apartments}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.apartments && touched.apartments}
                errorMessage={errors.apartments && touched.apartments && errors.apartments}
              />
            </div>
            <div className={styles.margin}>
              {/* <Input
                label="Phone"
                name="phone"
                type="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phone && touched.phone}
                errorMessage={errors.phone && touched.phone && errors.phone}
              /> */}

              <label htmlFor="phone">Phone</label>
              <Field
                            name="phone"
                            error={errors.phone && touched.phone}
                            errorMessage={errors.phone && touched.phone}
                            className={
                                errors.phone && touched.phone
                                    ? "text-input error"
                                    : "text-input"
                            }
                            render={({ field }) => (
                                <MaskedInput
                                    {...field}
                                    mask={[/\d/," ",/[1-9]/,/\d/,/\d/," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/]}
                                    id="phone"
                                    name="phone"
                                    style={{width: '100%', height:'40px', background: '#F9F8FA', border: '1px solid #828282', borderRadius: '8px', padding: '12px', marginTop: '5px', outline:'none'}}
                                    type="tel"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            )}
                        />
            </div>
          </div>
        </div>

        <div className={styles.advancedData}>
          <h3>Advanced personal data</h3>
          <div className={styles.advancedDataWrapper}>
            <Input
              className={styles.socialLink}
              label="Social media link"
              name="profile_link"
              type="text"
              value={values.profile_link}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.profile_link && touched.profile_link}
              errorMessage={errors.profile_link && touched.profile_link && errors.profile_link}
            />

            <div className={styles.radioButtonWrap}>
              <span className={styles.radioButtonTitle}>Mobility (Required)</span>
              <RadioButtonGroup
                className={styles.radioButtons}
                touched={touched.mobility}
                error={errors.mobility}
              >
                <Radio
                  name="mobility"
                  id="mobilityYes"
                  label="Yes"
                  onChange={() => setFieldValue("mobility", "yes")}
                  checked={values.mobility === "yes"}
                  onBlur={handleBlur}
                />
                <Radio
                  name="mobility"
                  id="mobilityNo"
                  label="No"
                  onChange={() => setFieldValue("mobility", "no")}
                  checked={values.mobility === "no"}
                  onBlur={handleBlur}
                />
              </RadioButtonGroup>
            </div>
            <div className={styles.radioButtonWrap}>
              <span className={styles.radioButtonTitle}>Work authorization (Required)</span>
              <RadioButtonGroup
                className={styles.radioButtons}
                touched={touched.work_authorization}
                error={errors.work_authorization}
              >
                <Radio
                  name="work_authorization"
                  id="work_authorizationYes"
                  label="Yes"
                  onChange={() => setFieldValue("work_authorization", "yes")}
                  checked={values.work_authorization === "yes"}
                  onBlur={handleBlur}
                />
                <Radio
                  name="work_authorization"
                  id="work_authorizationNo"
                  label="No"
                  onChange={() => setFieldValue("work_authorization", "no")}
                  checked={values.work_authorization === "no"}
                  onBlur={handleBlur}
                />
              </RadioButtonGroup>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.btnWrap}>
        <Button type="submit" disabled={isSubmitting} style={{ width: "100%", maxWidth: "328px" }}>
          Next Step
        </Button>
      </div>
    </form>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    avatar: "",
    role: "comforter",
    salutation: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
    description: "",
    email: "",
    sex: "",
    birthday: "--/--/----",
    country: "",
    zip_code: "",
    state: "",
    city: "",
    district: [],
    street: "",
    apartments: "",
    phone: "",
    profile_link: "",
    work_authorization: "",
    mobility: ""
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    const data = {
      ...values,
      sex: values.sex.value.toLowerCase(),
      salutation: values.salutation.value,
      country: values.country.value,
      state: values.state.value,
      city: values.city.value,
      birthday: moment(values.birthday).format("YYYY-MM-DD"),
      district: values.district[0].name,
      work_authorization: values.work_authorization === "yes" ? true : false,
      mobility: values.mobility === "yes" ? true : false
    };
    props.onSubmit(data);
    setSubmitting(false);
  },
  validationSchema,
  displayName: "ComforterRegistrationStep1Form"
})(ComforterRegistrationStep1Form);
