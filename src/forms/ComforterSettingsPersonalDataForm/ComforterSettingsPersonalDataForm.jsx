import React, {useState, useContext} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {withFormik} from "formik";
import moment from "moment";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import VideoUpload from "../../components/VideoUpload/VideoUpload";
import GalleryUpload from "../../components/GalleryUpload/GalleryUpload";
import RadioButtonGroup from "../../components/RadioButtonGroup/RadioButtonGroup";
import Radio from "../../components/RadioButton/RadioButton";
import Textarea from "../../components/Textarea/Textarea";
import InputDate from "../../components/InputDate/InputDate";
import Dropdown from "../../components/Dropdown/Dropdown";

import styles from "./ComforterSettingsPersonalDataForm.module.scss";

import validationSchema from "./validationSchema";
import service from "../../service";
import AutocompleteInput from "../../components/AutocompleteInput/AutocompleteInput";
import { salutationOptions, genderOptions, currentPlanInfo } from "../../helpers/options";
import { UserContext } from "../../context/UserContext";



const ComforterSettingsPersonalDataForm = ({
    user,
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
}) => {
    const userContext = useContext(UserContext)
    const planInfo = currentPlanInfo(userContext.subscriptionPlan)
    const [districtSuggestions, setDistrictSuggestions] = useState([]);
    const changeRender = (val)=>{
        setFieldValue('videoRendered', val);
    };

    const handleAddPicture = picture => {
        service.picturesService.add(user.id, picture.origin_path, picture.preview_path).then(res => {
          setFieldValue("pictures", [...values.pictures, res]);
        });
      };
      const handleDeletePicture = (picture, result) => {
        service.picturesService.delete(picture.id).then(() => {
          setFieldValue("pictures", result);
        });
      };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formWrapper}>
                <div className={styles.personalData}>
                    <h3>Personal data</h3>
                    <div className={styles.personalDataWrapper}>
                        <div className={styles.personalDataCol}>
                            <div className={styles.marginTop}>
                                <Dropdown
                                    label="Salutation"
                                    name="salutation"
                                    id="salutation"
                                    options={salutationOptions}
                                    value={values.salutation}
                                    onChange={val => setFieldValue("salutation", val)}
                                />
                            </div>
                            <div className={styles.marginTop}>
                                <Input
                                    type="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.email && touched.email}
                                    errorMessage={errors.email && touched.email && errors.email}
                                />
                            </div>
                        </div>
                        <div className={styles.personalDataCol}>
                            <div className={classNames(styles.marginTop)}>
                                <Dropdown
                                    label="Gender"
                                    name="sex"
                                    id="gender"
                                    options={genderOptions}
                                    value={values.sex}
                                    onChange={val => setFieldValue("sex", val)}
                                />
                            </div>
                            <div className={classNames(styles.marginTop)}>
                                <Input
                                    label="First name"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.firstName && touched.firstName}
                                    errorMessage={errors.firstName && touched.firstName && errors.firstName}
                                />
                            </div>
                        </div>

                        <div className={styles.personalDataCol}>
                            <div className={styles.marginTop}>
                                <Input
                                    label="Last name"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.lastName && touched.lastName}
                                    errorMessage={errors.lastName && touched.lastName && errors.lastName}
                                />
                            </div>
                            <div className={styles.marginTop}>
                                <InputDate
                                    label="Date of birth"
                                    name="dayOfBirth"
                                    value={values.dayOfBirth}
                                    onChange={value => setFieldValue("dayOfBirth", value)}
                                    onBlur={handleBlur}
                                    error={errors.dayOfBirth && touched.dayOfBirth}
                                    errorMessage={errors.dayOfBirth && touched.dayOfBirth && errors.dayOfBirth}
                                />
                            </div>
                        </div>

                        <div className={styles.personalDataCol}>
                            <div className={styles.marginTop}>
                <Textarea
                    label="Personal bio"
                    name="description"
                    style={{height: "143px"}}
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
                                name="zipCode"
                                type="number"
                                value={values.zipCode}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.zipCode && touched.zipCode}
                                errorMessage={errors.zipCode && touched.zipCode && errors.zipCode}
                            />
                        </div>
                        <div className={styles.margin}>
                            <Input
                                label="Country"
                                name="country"
                                value={values.country}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.country && touched.country}
                                errorMessage={errors.country && touched.country && errors.country}
                            />
                        </div>
                        <div className={styles.margin}>
                            <Input
                                label="State"
                                name="state"
                                value={values.state}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.state && touched.state}
                                errorMessage={errors.state && touched.state && errors.state}
                            />
                        </div>
                        <div className={styles.margin}>
                            <Input
                                label="City"
                                name="city"
                                value={values.city}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.city && touched.city}
                                errorMessage={errors.city && touched.city && errors.city}
                            />
                        </div>
                        <div className={styles.margin}>
                            <AutocompleteInput
                                label="Neighborhood"
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
                                    if (input.length > 2) {
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
                            <Input
                                label="Phone"
                                name="phone"
                                type="phone"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.phone && touched.phone}
                                errorMessage={errors.phone && touched.phone && errors.phone}
                            />
                        </div>
                    </div>
                </div>

        <GalleryUpload
          showGallery={true}
          value={values.pictures}
          count={planInfo.profilePhoto}
          onChange={({ type, picture, result }) => {
            if (type === "ADD") {
              handleAddPicture(picture);
            } else {
              handleDeletePicture(picture, result);
            }
          }}
        />

                <VideoUpload
                    url={values.videoLink}
                    videoDuration={planInfo.videoDuration}
                    initialRender={user.videoLink ? true : false}
                    onChangeUrl={url => setFieldValue("videoLink", url)}
                    onRemove={() => setFieldValue("videoLink", "")}
                    setRenderVideo={changeRender}
                    error={errors.videoLink && touched.videoLink}
                    errorMessage={errors.videoLink && touched.videoLink && errors.videoLink}
                />

                <div className={styles.advancedData}>
                    <h3>Advanced personal data</h3>
                    <div className={styles.advancedDataWrapper}>
                        <Input
                            className={styles.socialLink}
                            label="Social media link (Optional)"
                            name="profileLink"
                            type="text"
                            value={values.profileLink}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.profileLink && touched.profileLink}
                            errorMessage={errors.profileLink && touched.profileLink && errors.profileLink}
                        />

                        <div className={styles.radioButtonWrap}>
                            <span className={styles.radioButtonTitle}>Mobility</span>
                            <RadioButtonGroup className={styles.radioButtons}>
                                <Radio
                                    name="mobility"
                                    id="mobilityYes"
                                    label="Yes"
                                    onChange={() => setFieldValue("mobility", true)}
                                    checked={values.mobility === true}
                                    onBlur={handleBlur}
                                />
                                <Radio
                                    name="mobility"
                                    id="mobilityNo"
                                    label="No"
                                    onChange={() => setFieldValue("mobility", false)}
                                    checked={values.mobility === false}
                                    onBlur={handleBlur}
                                />
                            </RadioButtonGroup>
                        </div>
                        <div className={styles.radioButtonWrap}>
                            <span className={styles.radioButtonTitle}>Work authorization</span>
                            <RadioButtonGroup className={styles.radioButtons}>
                                <Radio
                                    name="workAuthorization"
                                    id="workAuthorizationYes"
                                    label="Yes"
                                    onChange={() => setFieldValue("workAuthorization", true)}
                                    checked={values.workAuthorization === true}
                                    onBlur={handleBlur}
                                />
                                <Radio
                                    name="workAuthorization"
                                    id="workAuthorizationNo"
                                    label="No"
                                    onChange={() => setFieldValue("workAuthorization", false)}
                                    checked={values.workAuthorization === false}
                                    onBlur={handleBlur}
                                />
                            </RadioButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.btnWrap}>
                <Button
                    type="button"
                    style={{width: "100%", maxWidth: "328px", marginRight: "16px"}}
                    onClick={handleReset}
                    disabled={isSubmitting}
                    buttonStyle="secondary"
                >
                    Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting} style={{width: "100%", maxWidth: "328px"}}>
                    Save
                </Button>
            </div>
        </form>
    );
};

ComforterSettingsPersonalDataForm.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        salutation: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        description: PropTypes.string,
        email: PropTypes.string,
        sex: PropTypes.string,
        dayOfBirth: PropTypes.string,
        zipCode: PropTypes.string,
        country: PropTypes.string,
        state: PropTypes.string,
        apartments: PropTypes.string,
        phone: PropTypes.string,
        pictures: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                preview_path: PropTypes.string,
                origin_path: PropTypes.string
            })
        ),
        videoLink: PropTypes.string,
        profileLink: PropTypes.string,
        mobility: PropTypes.bool,
        workAuthorization: PropTypes.bool
    }),
    changeUserName: PropTypes.func.isRequired
};

ComforterSettingsPersonalDataForm.defaultProps = {
    user: {
        id: 0,
        salutation: "",
        firstName: "",
        lastName: "",
        description: "",
        email: "",
        sex: "",
        dayOfBirth: "",
        zipCode: "",
        country: "",
        state: "",
        apartments: "",
        phone: "",
        pictures: [
            {
                id: 0,
                preview_path: "",
                origin_path: ""
            }
        ],
        videoLink: "",
        profileLink: "",
        mobility: true,
        workAuthorization: true
    }
};

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({user}) => ({
        ...user,
        dayOfBirth: new Date(user.dayOfBirth),
        sex: genderOptions.find(({value}) => user.sex === value.toLowerCase()),
        salutation: salutationOptions.find(({value}) => user.salutation === value),
        district: [{name: user.district}],
        videoRendered: false
    }),
    handleSubmit: (values, {setSubmitting, setFieldError, props}) => {
        if(values.videoLink && values.videoLink.length>1 && !values.videoRendered){
            setFieldError('videoLink', 'Please click on Add Video button to render the video');
            setSubmitting(false);
        }
        else {
            service.userService
                .editUserPersonalData(values.id, {
                    ...values,
                    dayOfBirth: moment(values.dayOfBirth).format("YYYY-MM-DD"),
                    sex: values.sex.value.toLowerCase(),
                    salutation: values.salutation.value,
                    district: values.district[0].name
                })
                .then(res => {
                    if (res.status === 200) {
                        props.changeUserName(res.data.firstName, res.data.lastName);
                    }
                    if (props.user.email !== values.email) {
                        props.changeEmailStatus();
                    }
                })
                .finally(() => setSubmitting(false));
        }
    },
    validationSchema,
    displayName: "ComforterPersonalDataForm"
})(ComforterSettingsPersonalDataForm);
