import React from "react";
import PropTypes from "prop-types";
import { Formik, FieldArray, getIn } from "formik";
import { object, array, number, string } from "yup";
import styles from "./ComforterRegistrationStep7Form.module.scss";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import service from "../../../service";

const validationSchema = object().shape({
  answers: array()
    .of(
      object().shape({
        question_id: number(),
        question: string(),
        answer: string().required("Required")
      })
    )
    .required("Required")
});

const ComforterRegistrationStep7Form = ({ data, user, onSubmit, onBack }) => {
  return (
    <Formik
      initialValues={{
        answers: data.map(({ id, question, answer }) => {
          if (!answer) return { question_id: id, question, answer: "" };

          return { question_id: id, question, answer: answer.answer, id: answer.id };
        })
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        service.userService
          .editUserInterview(user.id, { answers_attributes: values.answers }, user.token)
          .then(() => {
            onSubmit();
            setSubmitting(false);
          });
      }}
    >
      {({ values, handleSubmit, handleChange, isSubmitting, errors, touched, handleBlur }) => (
        <form onSubmit={handleSubmit}>
          <FieldArray>
            {() => (
              <div className={styles.wrapper}>
                {values.answers.map(({ question_id, question, answer }, index) => {
                  const name = `answers[${index}].answer`;
                  const error = getIn(errors, name);
                  const touch = getIn(touched, name);

                  return (
                    <div className={styles.item} key={question_id}>
                      <h3>{question}</h3>
                      <Input
                        name={`answers[${index}].answer`}
                        value={answer}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={error && touch}
                        errorMessage={error && touch && error}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </FieldArray>

          <div className={styles.btnWrap}>
            <Button
              onClick={onBack}
              disabled={isSubmitting}
              type="button"
              style={{ width: "100%", maxWidth: "328px", marginRight: "16px" }}
              buttonStyle="secondary"
            >
              Back
            </Button>
            <Button
              disabled={isSubmitting}
              type="submit"
              style={{ width: "100%", maxWidth: "328px" }}
            >
              Next Step
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

ComforterRegistrationStep7Form.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      question: PropTypes.string,
      answer: PropTypes.any
    })
  ),
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};

ComforterRegistrationStep7Form.defaultProps = {
  data: [
    {
      id: 0,
      question: "",
      answer: ""
    }
  ]
};

export default ComforterRegistrationStep7Form;
