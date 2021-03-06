import React from "react";
import PropTypes from "prop-types";
import { object, array } from "yup";
import { withFormik } from "formik";
import { withModal, Modal } from "../../context/ModalContext";

import styles from "./ComforterSettingsWorkOptionsForm.module.scss";
import Button from "../../components/Button/Button";
import ServicesByLocation from "../../components/ServicesByLocation/ServicesByLocation";

const validationSchema = object().shape({
  serviceLocationsAttributes: array().required("Required")
});

const ComforterSettingsWorkOptionsForm = ({
  userServices,
  values,
  handleSubmit,
  setFieldValue,
  handleReset,
  isSubmitting,
  errors,
  touched,
  handleBlur,
  context: { toogleModal, closeModal }
}) => {
  const filteredLocations = () => values.serviceLocationsAttributes.filter(location => location._destroy === undefined);

  const changeLocationHandler = (input, id) => {
    const changedLocations = values.serviceLocationsAttributes.map(location => {
      if (location.id === id) location.district = input;
      return location;
    });
    setFieldValue("serviceLocationsAttributes", changedLocations);
  };

  const changeLocationServicePriceHandler = (serviceId, price, locationId) => {
    const locations = [...values.serviceLocationsAttributes];
    const location = locations.find(location => location.id === locationId);
    const service = location.service_in_locations_attributes.find(service => service.service_id === serviceId);
    service.price = price;
    if (!price) {
      service._destroy = true;
      service.checked = false;
    }

    setFieldValue("serviceLocationsAttributes", locations);
  };

  const toogleLocationServiceHandler = (serviceId, checked, price, locationId) => {
    if (!price) {
      toogleModal("serviceWithoutPrice");
      return;
    }
    const locations = [...values.serviceLocationsAttributes];
    const location = locations.find(location => location.id === locationId);
    const service = location.service_in_locations_attributes.find(service => service.service_id === serviceId);
    service.checked = checked;
    if (checked) {
      service._destroy = false;
    } else {
      service._destroy = true;
    }

    setFieldValue("serviceLocationsAttributes", locations);
  };

  const addLocationHandler = async () => {
    const services = await userServices();

    const newLocation = {
      city: "",
      district: "",
      service_in_locations_attributes: services.map(({ id, name }) => ({ service_id: id, name, checked: false }))
    };

    setFieldValue("serviceLocationsAttributes", [...values.serviceLocationsAttributes, newLocation]);
  };

  const removeLocationHandler = id => {
    const changedLocations = values.serviceLocationsAttributes.map(location => {
      if (location.id === id) {
        const localLocation = { ...location };
        localLocation._destroy = true;

        return localLocation;
      }
      return location;
    });
    setFieldValue("serviceLocationsAttributes", changedLocations);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <h3>Locations</h3>

        {filteredLocations().map(location => (
          <ServicesByLocation
            key={`${location.district}-${location.id}`}
            location={location.district}
            services={location.service_in_locations_attributes}
            disableRemoving={filteredLocations().length === 1}
            onChangeLocation={input => changeLocationHandler(input, location.id)}
            onChangeServicesStatus={(service_id, checked, price) =>
              toogleLocationServiceHandler(service_id, checked, price, location.id)
            }
            onChangeServicesPrice={(service_id, price) =>
              changeLocationServicePriceHandler(service_id, price, location.id)
            }
            onRemove={() => removeLocationHandler(location.id)}
            onBlur={handleBlur}
            error={errors.serviceLocationsAttributes && touched.serviceLocationsAttributes}
            errorMessage={
              errors.serviceLocationsAttributes &&
              touched.serviceLocationsAttributes &&
              errors.serviceLocationsAttributes
            }
          />
        ))}
      </div>
      <div className={styles.addLocationButtonWrapper}>
        <Button type="button" width="100%" onClick={addLocationHandler}>
          Add location
        </Button>
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
      <Modal
        id="serviceWithoutPrice"
        icon="attention"
        title="Attention"
        subtitle="Services without price"
        text="First you need to set a price"
        CancelButton={<Button onClick={() => closeModal()}>Ok</Button>}
      />
    </form>
  );
};

ComforterSettingsWorkOptionsForm.propTypes = {
  serviceLocationsAttributes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      city: PropTypes.string,
      district: PropTypes.string,
      service_in_locations_attributes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          checked: PropTypes.bool
        })
      )
    })
  ),
  onSave: PropTypes.func,
  userServices: PropTypes.func.isRequired
};

ComforterSettingsWorkOptionsForm.defaultProps = {
  serviceLocationsAttributes: [
    {
      id: 0,
      city: "",
      district: "",
      service_in_locations_attributes: [
        {
          id: 0,
          name: "",
          checked: false
        }
      ]
    }
  ],
  onSave: values =>
    new Promise(resolve => {
      resolve("success", values);
    })
};

export default withModal(
  withFormik({
    enableReinitialize: true,
    mapPropsToValues: ({ serviceLocationsAttributes }) => ({ serviceLocationsAttributes }),
    handleSubmit: (values, { setSubmitting, props, setFieldError }) => {
      const service_locations_attributes = JSON.parse(JSON.stringify(values.serviceLocationsAttributes));
      let emptyLocation = false;

      for (let i = 0; i < service_locations_attributes.length; i++) {
        if (!service_locations_attributes[i].district) emptyLocation = true;

        const services = service_locations_attributes[i].service_in_locations_attributes;
        service_locations_attributes[i].service_in_locations_attributes = services.filter(
          service => service.price !== undefined
        );
      }

      if (emptyLocation) {
        setFieldError("serviceLocationsAttributes", "Location can`t be blank");
        setSubmitting(false);
      } else {
        props.onSave({ service_locations_attributes }).finally(() => setSubmitting(false));
      }
    },
    validationSchema,
    displayName: "ComforterWorkOptionsForm"
  })(ComforterSettingsWorkOptionsForm)
);
