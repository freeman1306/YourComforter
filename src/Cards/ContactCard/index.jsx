import React from "react";
import moment from "moment";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { getPartnerUnreadMsgsCount } from "../../helpers";
import { messageTypes, orderStatusCodes } from "../../helpers/constans";
import System from "../../icons/system-icon.svg";

const ContactCard = ({ userId, partner, curPartnerId, partnerFilterQuery, selectPartner }) => {
  const { firstName, lastName, avatar } = partner;
  const partnerName = `${firstName} ${lastName}`;
  const partnerAvatar = avatar;

  if (partnerFilterQuery && partner.id !== 0) {
    if (!~partnerName.toLowerCase().indexOf(partnerFilterQuery)) {
      return null;
    }
  }

  const lastMsg = partner.messages ? partner.messages[partner.messages.length - 1] : null;
  let islastMsgOwn, lastMsgText, lastMsgMoment;
  if (lastMsg) {
    const today = moment().format("YYYY-MM-DD");
    const yesterday = moment()
      .subtract(1, "d")
      .format("YYYY-MM-DD");
    const lastMsgDate = moment(lastMsg.date).format("YYYY-MM-DD");
    if (lastMsgDate === today) {
      lastMsgMoment = moment(lastMsg.date).format("h:mm A");
    } else if (lastMsgDate === yesterday) {
      lastMsgMoment = "Yesterday";
    } else {
      lastMsgMoment = moment(lastMsg.date).format("MMMM D");
    }
    islastMsgOwn = lastMsg.senderId === userId;
    switch (lastMsg.type) {
      case messageTypes.text:
        lastMsgText = lastMsg.body;
        break;
      case messageTypes.system:
        lastMsgText = orderStatusCodes[lastMsg.body.orderStatusCode];
        if (!islastMsgOwn) {
          lastMsgText = `${partnerName} ${lastMsgText}`;
        }
        break;
      default:
        console.error("Unknown message type");
    }
  }
  const unreadMsgsCount = getPartnerUnreadMsgsCount(userId, partner);
  return (
    <li
      className={classNames(styles.companion, { [styles.selected]: partner.id === curPartnerId })}
      onClick={selectPartner}
    >
      <div
        className={styles.left}
        style={{
          background: partnerAvatar
            ? `url(${partnerAvatar}) no-repeat center center / cover`
            : `url(${System}) no-repeat center center / cover`
        }}
      />
      <div className={styles.right}>
        <div className={styles.companionData}>
          <div className={styles.companionNameWrap}>
            <h4 className={styles.companionName}>{partnerName}</h4>
            {/* For next releases
              import { ReactComponent as MicrofoneIcon } from "../../icons/microfone.svg"
              <MicrofoneIcon style={{ marginLeft: "10px" }} />
            */}
          </div>
          {lastMsgMoment ? <span className={styles.companionDate}>{lastMsgMoment}</span> : null}
        </div>

        <div className={styles.companionLastMessageWrap}>
          <p className={styles.companionLastMessage}>
            {lastMsgText && (
              <span>
                {islastMsgOwn && lastMsg.type === messageTypes.text && <b>You: </b>}
                {lastMsgText}
              </span>
            )}
          </p>
          {!!unreadMsgsCount && <span className={styles.companionNewMessagesCount}>{unreadMsgsCount}</span>}
        </div>
      </div>
    </li>
  );
};

export default ContactCard;
