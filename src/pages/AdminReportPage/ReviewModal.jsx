import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import styles from './AdminReportPage.module.scss';
import { Modal } from '../../context/ModalContext';
import Button from '../../components/Button/Button';
import Textarea from '../../components/Textarea/Textarea';
import RatingStars from '../../components/RatingStars/RatingStars';
import { UserContext } from '../../context/UserContext';

const ReviewModal = ({ id, orderID, subtitle, onAccept, handleCloseModal }) => {
  
  const { id: userID } = useContext(UserContext);
  const [starValue, setStarValue] = useState(0);
  const [commentFieldValue, setCommentFieldValue] = useState('');

  const resetState = () => {
    setStarValue(0);
    setCommentFieldValue('');
  };

  const modalCloseHandler = () => {
    handleCloseModal();
    resetState();
  };

  const starValueChangeHandler = rate => {
    setStarValue(rate);
  };

  const changeCommentHandler = ({ target }) => {
    setCommentFieldValue(target.value);
  };

  const addReviewHandler = () => {
    onAccept(userID, orderID, starValue, commentFieldValue, resetState);
  };

  return (
    <Modal
      id={id}
      icon=''
      type='dialog'
      title='Add a comment about trusted companion professional'
      stars={
        <div className={styles.mainStarsBlock}>
          <RatingStars
            size={25}
            stSize={28}
            value={starValue}
            onChange={starValueChangeHandler}
          />
        </div>
      }
      subtitleClassName={styles.orderModalSubtitle}
      titleClassName={styles.orderModalTitle}
      innerClassName={styles.orderModalInner}
      subtitle={subtitle}
      textarea={
        <>
          <Textarea
            name='text'
            label='Comment'
            value={commentFieldValue}
            className={styles.orderModalTextarea}
            onChange={changeCommentHandler}
          />
          <p>Please enter your comment here ({commentFieldValue.length}/120)</p>
        </>
      }
      CancelButton={
        <Button
          className={styles.reviewCanceBtn}
          buttonStyle='secondary'
          onClick={modalCloseHandler}
        >
          Cancel
        </Button>
      }
      AcceptButton={
        <Button
          disabled={starValue === 0 || commentFieldValue.length > 120}
          className={styles.reviewSaveBtn}
          onClick={addReviewHandler}
        >
          Save
        </Button>
      }
    />
  );
};

ReviewModal.propTypes = {
  id: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired
};

export default ReviewModal;
