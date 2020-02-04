import React, { useState, useEffect, useRef } from "react";
import uuidv1 from "uuid/v1";
import moment from "moment";
import classNames from "classnames";
import styles from "./styles.module.scss";
import ContactCard from "../../Cards/ContactCard";
import SensorCard from "../../Cards/SensorCard";
import Input from "../../components/Input/Input";
import { ReactComponent as Search } from "../../icons/search-icon.svg";
import { ReactComponent as Left } from "../../icons/arrow-left.svg";
import { ReactComponent as Send } from "../../icons/send-icon.svg";
import { usePrevious } from "../../helpers/hooks";
import wsAgent from "../../helpers/reduxWSWrapper";
import { USER_SENDS_MESSAGE, messageTypes } from "../../helpers/constans";
import System from "../../icons/system-icon.svg";

const MessengerLayout = ({ partners, user, match }) => {
  const chatWrapper = useRef();
  const [visible, setVisible] = useState(false);
  const [curPartnerId, setCurPartnerId] = useState(0);
  const [isPartnerFromUrlDisplayed, turnOffPartnerFromUrl] = useState(false);
  if (partners.length > 1 && !isPartnerFromUrlDisplayed) {
    const partnerIdFromUrl = parseInt(match.params.id);
    if (partnerIdFromUrl && partners.find(p => p.id === partnerIdFromUrl)) {
      setCurPartnerId(partnerIdFromUrl);
    }
    turnOffPartnerFromUrl(true);
  }
  const curPartner = partners.find(p => p.id === curPartnerId);

  const { firstName, lastName, avatar } = curPartner;
  const curPartnerName = `${firstName} ${lastName}`;
  const curPartnerAvatar = avatar;

  const curMessages = curPartner.messages || [];
  const prevMessages = usePrevious([...curMessages]) || [];
  useEffect(() => {
    const chatElement = chatWrapper.current;
    const curLastMsg = curMessages[curMessages.length - 1];
    const prevLastMsg = prevMessages[prevMessages.length - 1];
    if (curLastMsg && prevLastMsg) {
      if (curLastMsg.uuid !== prevLastMsg.uuid) {
        chatElement.scrollTop = chatElement.scrollHeight;
      }
    } else if (!prevLastMsg) {
      chatElement.scrollTop = chatElement.scrollHeight;
    }
  });

  const [partnerSearchQuery, setPartnerSearchQuery] = useState("");
  const partnerFilterQuery = partnerSearchQuery
    .trim()
    .replace(/\s+/, " ")
    .toLowerCase();
  const [userTextMessage, setUserTextMessage] = useState("");
  return (
    <div className={classNames("mainWrapper", styles.messagesWrapper)}>
      <div className={styles.companionWrap}>
        <div className={styles.companionSearch}>
          <Input
            name="partnerSearch"
            placeholder="Search"
            icon={<Search />}
            value={partnerSearchQuery}
            onChange={e => setPartnerSearchQuery(e.target.value)}
          />
        </div>

        <ul className={styles.companions}>
          {partners &&
            partners.map(partner => (
              <ContactCard
                key={partner.id}
                userId={user.id}
                partner={partner}
                curPartnerId={curPartnerId}
                partnerFilterQuery={partnerFilterQuery}
                selectPartner={() => {
                  setCurPartnerId(partner.id);
                  setVisible(!visible);
                  if (partner.id !== curPartnerId) {
                    setUserTextMessage("");
                  }
                }}
              />
            ))}
        </ul>
      </div>
      <div
        className={styles.messageCompanionWrap}
        style={{ left: visible ? "0" : "-100%", top: visible ? "0" : "-400%" }}
      >
        <div className={styles.messageCompanionTopLine}>
          <button className={styles.messageCompanionBack} onClick={() => setVisible(!visible)}>
            <Left />
          </button>

          <div className={styles.actualCompanion}>
            <div
              className={styles.actualCompanionAvatar}
              style={{
                background: curPartnerAvatar
                  ? `url(${curPartnerAvatar}) no-repeat center center / cover`
                  : `url(${System}) no-repeat center center / cover`
              }}
            />

            <div className={styles.actualCompanionData}>
              <h5 className={styles.actualCompanionName}>{curPartnerName}</h5>
              {false &&
              !!curPartnerId && ( // For next releases
                  <span className={styles.actualCompanionActivity}>
                    {curPartner.isOnline ? (
                      <span>
                        <span className={styles.online}>•</span> Online
                      </span>
                    ) : (
                      <span>
                        <span className={styles.offline}>•</span> Offline
                      </span>
                    )}
                  </span>
                )}
            </div>
          </div>
        </div>

        <div ref={chatWrapper} className={styles.messagesWrap}>
          <ul className={styles.messages}>
            {curMessages.map((message, i, messages) => {
              const curMsgDay = message.date ? moment(message.date).format("MMMM D") : null;
              const prevMsgDay = messages[i - 1] ? moment(messages[i - 1].date).format("MMMM D") : null;
              const msgDay = curMsgDay !== prevMsgDay ? curMsgDay : null;
              const isEdgeMsg = !curPartner.isAllMsgsRetrieved && i === 0;
              return (
                <SensorCard
                  key={message.uuid}
                  isMessageOwn={message.senderId === user.id}
                  curPartnerName={curPartnerName}
                  message={message}
                  msgDay={msgDay}
                  isEdgeMsg={isEdgeMsg}
                />
              );
            })}
          </ul>
        </div>

        {!!curPartner.id && (
          <div className={styles.sendMessage}>
            <Input
              name="chatInputField"
              placeholder="Type something..."
              icon={<Send color="#6E378C" />}
              value={userTextMessage}
              onChange={e => setUserTextMessage(e.target.value)}
              onKeyDown={e => {
                const msg = userTextMessage;
                if (e.keyCode === 13 && msg && msg.length <= 250) {
                  const action = {
                    type: USER_SENDS_MESSAGE,
                    payload: {
                      uuid: uuidv1(),
                      senderId: user.id,
                      recipientId: curPartnerId,
                      type: messageTypes.text,
                      body: msg,
                      date: moment().format()
                    }
                  };
                  wsAgent.send(action);
                  setUserTextMessage("");
                  e.preventDefault();
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MessengerLayout;
