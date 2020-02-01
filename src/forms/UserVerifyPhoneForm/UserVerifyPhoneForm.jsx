import React from "react";
import PropTypes from "prop-types";
import { Formik, Field } from "formik";
import { string, object } from "yup";
import classNames from "classnames";

import styles from "./UserVerifyPhoneForm.module.scss";

import Button from "../../components/Button/Button";
import MaskedInput from "react-text-mask"

import { phoneRegExp } from "../../helpers/validation";

const UserVerifyPhoneFormSchema = object().shape({
    phone: string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required")
});

const UserVerifyPhoneForm = props => {
    return (
        <Formik
            initialValues={{ phone: "" }}
            validationSchema={UserVerifyPhoneFormSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    props.onSubmit(values.phone);
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <h3 className={classNames("textC", styles.mainTitle)}>Verify your account!</h3>
                    <p className={classNames(styles.description, "smallText", "textC")}>
                        In order to proceed you need to confirm your registration. We will send you a code which need to be entered in order to confirm you contact data.
                    </p>
                    <div style={{ marginBottom: "30px" }}>
                        <label htmlFor="phone">Your phone:</label>
                        <Field
                            name="phone"
                            error={errors.phone && touched.phone}
                            errorMessage={errors.phone && touched.phone && errors.phone}
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
                                    style={{width: '100%', height:'40px', background: '#F9F8FA', border: '1px solid #828282', borderRadius: '8px', padding: '12px', marginTop: '5px'}}
                                    placeholder="+1 234 567-8900"
                                    type="tel"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            )}
                        />
                    </div>
                    <Button type="submit" width="100%" disabled={isSubmitting}>
                        Send confirmation
                    </Button>
                </form>
            )}
        </Formik>
    );
};

UserVerifyPhoneForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default UserVerifyPhoneForm;
