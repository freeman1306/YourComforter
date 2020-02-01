import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { UserContext } from "../../context/UserContext";
//import { ReactComponent as DoubleCheck } from "../../icons/dobule-check.svg";
import { messageTypes, orderStatusCodes } from "../../helpers/constans";
import { paths } from "../../routes";

const MessageCard = ({ isMessageOwn, message, curPartnerName, msgDay }) => {
  const user = useContext(UserContext);
  const userName = `${user.firstName} ${user.lastName}`;
  const sendingDate = moment(message.date).format("h:mm A");
  return (
    <li
      className={classNames({
        [styles.userMessageWrap]: isMessageOwn,
        [styles.companionMessageWrap]: !isMessageOwn
      })}
    >
      {!!msgDay && (
        <div className={styles.dateMessageWrap}>
          <p className={styles.dateMessage}>{msgDay}</p>
        </div>
      )}
      {message.type === messageTypes.text &&
        (isMessageOwn ? (
          <div className={styles.userMessageInlineWrap}>
            <h5>
              {/*<DoubleCheck style={{ marginRight: "9px" }} />*/}
              <span>{sendingDate}</span> {userName}
            </h5>
            <div className={styles.positionUserMessage}>
              <div className={styles.userMessage}>
                {message.body}
                <span />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.companionMessageInlineWrap}>
            <h5>
              {/*<DoubleCheck style={{ marginRight: "9px" }} />*/}
              {curPartnerName} <span>{sendingDate}</span>
            </h5>
            <div className={styles.companionMessage}>
              {message.body}
              <span />
            </div>
          </div>
        ))}
      {message.type === messageTypes.system &&
        (isMessageOwn ? (
          <div className={styles.serviceMessageWrap}>
            <div className={styles.serviceMessage}>
              <span>
                {orderStatusCodes[message.body.orderStatusCode]}
                {". "}
              </span>
              <NavLink to={`${paths.order}/${message.body.orderId}`}>View order</NavLink>
            </div>
          </div>
        ) : (
          <div className={classNames(styles.serviceMessageWrap, styles.companion)}>
            <div className={styles.serviceMessage}>
              <span>{curPartnerName}</span>
              {" "}
              <span className={styles.notificationText}>
                {orderStatusCodes[message.body.orderStatusCode]}
                {". "}
              </span>
              <NavLink to={`${paths.order}/${message.body.orderId}`}>View order</NavLink>
            </div>
          </div>
        ))}
    </li>
  );
};

export default MessageCard;
