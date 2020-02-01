import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { string, object } from "yup";
import classNames from "classnames";
import { withFormik } from "formik";
import moment from "moment";

import styles from "./OrderCheckoutForm.module.scss";

import ConfirmRequestModal from "../../components/ConfirmRequestModal/ConfirmRequestModal";
import RadioButtonGroup from "../../components/RadioButtonGroup/RadioButtonGroup";
import RadioButton from "../../components/RadioButton/RadioButton";
import Textarea from "../../components/Textarea/Textarea";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Hint from "../../components/Hint/Hint";
import { paths } from "../../routes";

const OrderCheckoutForm = ({
  comforterId,
  comforterFirstName,
  comforterLastName,
  comforterServices,
  seekerFriends,
  day,
  startTime,
  endTime,
  values,
  touched,
  errors,
  handleChange,
  setFieldValue,
  handleBlur,
  handleSubmit,
  submitCheckout,
  cancelCheckout,
  ordersCount,
  allowedOrders,
  isAllowed
}) => {
  const [orderNoteLength, setOrderNoteLength] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isConfirm, setIsConfirm] = useState(false);

  useEffect(() => {
    const chosenStartTime = moment(startTime, "hh:mm A");
    const chosenEndTime = moment(endTime, "hh:mm A");
    const duration = moment.duration(chosenEndTime.diff(chosenStartTime));
    const hours = duration.asHours();
    const price = values.service.price * hours;

    if (values.service.price !== 0) {
      setTotalPrice(parseFloat(price.toFixed(2), 10));
    }
  }, [values.service, endTime, startTime]);

  useEffect(() => {
    setOrderNoteLength(values.orderNote.length);
  }, [values.orderNote]);

  const onCancel = () => cancelCheckout();

  const onSubmit = () => {
    if(ordersCount.length<allowedOrders){
      handleSubmit();
      if (values.service.price !== 0) {
        setIsConfirm(!isConfirm);
      }
    }
    else{
      isAllowed(false)
    }
  };

  const toogleConfirmCheckout = () => setIsConfirm(!isConfirm);

  const handleSubmitCheckout = () => {
    submitCheckout({ ...values, totalPrice });
    toogleConfirmCheckout();
  };

  const acceptedButton = (
    <Button onClick={handleSubmitCheckout} type="submit">
      Complete
    </Button>
  );
  const cancelButton = (
    <Button buttonStyle="secondary" onClick={toogleConfirmCheckout} type="button">
      Back
    </Button>
  );

  const getServicesListByLocation = () => {
    const result = comforterServices.find(
      ({ location }) => location === values.companionFriend.value.slice(values.companionFriend.value.indexOf(", ") + 2)
    );

    if (!result) return [];

    return result.services;
  };
  return (
    <>
      <div>
        <div className={styles.wrapper}>
          <h3 className={styles.mainTitle}>My trusted companion professional:</h3>
          <Link to={`${paths.profile}/${comforterId}`} className={styles.userFullName}>
            {comforterFirstName} {comforterLastName}
          </Link>

          <div className={styles.companionFriendWrap}>
            <h3 className={styles.title}>Trusted companion friend</h3>

            <div className={styles.companionFriend}>
              <div className={styles.left}>
                <div className={styles.dropdownWrap}>
                  <Dropdown
                    label="Select a trusted companion friend"
                    options={seekerFriends}
                    id="companionFriend"
                    value={values.companionFriend}
                    onChange={val => setFieldValue("companionFriend", val)}
                    onBlur={handleBlur}
                    error={errors.companionFriend && touched.companionFriend}
                    errorMessage={errors.companionFriend && touched.companionFriend && errors.companionFriend}
                  />
                </div>

                <h3 className={classNames(styles.title, styles.serviceTitle)}>Service</h3>

                <div className={styles.radioButtonWrapLabel}>
                  <p>Select a servise</p>
                  <div className={styles.hintWrap}>
                    <Hint children="The price of each service is indicated for each hour. Your Comforters takes a certain fee from each payment." />
                  </div>
                </div>

                <RadioButtonGroup
                  value={values.service}
                  error={errors.service}
                  touched={touched.service}
                  className={styles.radioButtonWrap}
                >
                  {getServicesListByLocation().length > 0 ? (
                    getServicesListByLocation().map(({ name, price, id }) => (
                      <div key={id} className={styles.radioItemWrap}>
                        <RadioButton
                          name="service"
                          label={`${name},`}
                          id={`service${id}`}
                          value={`service${id}`}
                          onChange={() => setFieldValue("service", { id, name, price })}
                          onBlur={handleBlur}
                        />
                        <span className={styles.servicePrice}>${price}/hour</span>
                      </div>
                    ))
                  ) : (
                    <div className={styles.radioItemWrap}>No services found for this city</div>
                  )}
                </RadioButtonGroup>
              </div>

              <div className={styles.right}>
                <Textarea
                  label={`Please enter your notes here (${orderNoteLength}/500)`}
                  placeholder="Note..."
                  width="100%"
                  style={{ height: "305px" }}
                  name="orderNote"
                  value={values.orderNote}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.orderNote && touched.orderNote}
                  errorMessage={errors.orderNote && touched.orderNote && errors.orderNote}
                />
              </div>
            </div>
          </div>

          <div className={styles.orderScedulingWrap}>
            <div className={styles.orderInputs}>
              <Input
                value={`${moment(day).format("MM/DD/YYYY")}, ${startTime}-${endTime}`}
                type="text"
                label="Date of order"
                name="dateOforder"
                readOnly
              />
            </div>
          </div>

          <p className={styles.totalPrice}>
            Total price: <span>${totalPrice}</span>
          </p>
        </div>

        <div className={styles.btnWrap}>
          <Button
            type="button"
            style={{ width: "100%", maxWidth: "328px", marginRight: "16px" }}
            buttonStyle="secondary"
            onClick={onCancel}
          >
            Back
          </Button>
          <Button
            type="submit"
            style={{ width: "100%", maxWidth: "328px" }}
            onClick={onSubmit}
            disabled={errors.orderNote !== undefined}
          >
            Next Step
          </Button>
        </div>
      </div>
      {isConfirm && (
        <ConfirmRequestModal
          comforterFirstName={comforterFirstName}
          comforterLastName={comforterLastName}
          trustedCompanionFriend={values.companionFriend.value}
          service={values.service.name}
          totalPrice={totalPrice}
          cancelButton={cancelButton}
          acceptButton={acceptedButton}
          orderDates={`${moment(day).format("MM/DD/YYYY")}, ${startTime}-${endTime}`}
          notes={values.orderNote}
        />
      )}
    </>
  );
};

export default withFormik({
  mapPropsToValues: ({ seekerFriends }) => ({
    orderNote: "",
    companionFriend: seekerFriends[0],
    service: { id: 0, name: "", price: 0 }
  }),
  validationSchema: () => {
    return object().shape({
      orderNote: string().max(500, "500 characters maximum"),
      companionFriend: object({
        id: string(),
        value: string()
      }).required("Required"),
      service: object({
        name: string(),
        price: string()
      })
        .test("service", "Required", ({ name, price }) => {
          return name !== "" && price !== 0;
        })
        .required("Required")
    });
  },
  handleSubmit: () => {}
})(OrderCheckoutForm);
