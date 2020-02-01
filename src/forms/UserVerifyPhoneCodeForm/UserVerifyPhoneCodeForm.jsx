import React, {useState} from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { object, number } from "yup";
import classNames from "classnames";

import styles from "./UserVerifyPhoneCodeForm.module.scss";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Popup from "../../components/Popup/Popup";
import {withRouter} from "react-router-dom";

//TODO: validate code, hide input number arrows
const UserVerifyPhoneCodeFormSchema = object().shape({
    code: number().required("Required")
});

const UserVerifyPhoneCodeForm = props => {
    const [showPopup, setPopup] = useState(false);
    return (
        <Formik
            initialValues={{ code: "" }}
            validationSchema={UserVerifyPhoneCodeFormSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    props.onSubmit(values.code);
                    setSubmitting(false);
                    setPopup(true);
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
                <form className={styles.form} onSubmit={handleSubmit}>
                    {showPopup && <Popup icon="congratulation" closeAction={()=>{setPopup(false)}} title="Congratulation" subtitle="You successfully verified." text=""
                                           button={<Button onClick={()=>{props.history.push('/login')}} >Ok</Button>}/>}
                    <h3 className={classNames("textC", styles.mainTitle)}>Verify your account!</h3>
                    <p className={classNames(styles.description, "smallText", "textC")}>
                        We sent a verification code to your phone: <span>{props.currentPhone}</span> Please check your phone and enter the verification code in the box
                        below.
                    </p>
                    <div style={{ marginBottom: "30px" }}>
                        <Input
                            label="Verification code"
                            placeholder="785415"
                            type="number"
                            name="code"
                            value={values.code}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.code && touched.code}
                            errorMessage={errors.code && touched.code && errors.code}
                            underline={false}
                        />
                    </div>
                    <div className={styles.btnWrapper}>
                        <Button buttonStyle="secondary" type="button" width="156px" onClick={props.resetPhone} disabled={isSubmitting}>
                            Back
                        </Button>
                        <Button type="submit" width="156px" disabled={isSubmitting}>
                            Verify
                        </Button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

UserVerifyPhoneCodeForm.propTypes = {
    currentPhone: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    resetPhone: PropTypes.func.isRequired
};

export default withRouter(UserVerifyPhoneCodeForm);
