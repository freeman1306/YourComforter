import React, { useState } from "react"
import VisibilitySensor from "react-visibility-sensor"
import MessageCard from "../MessageCard"
import wsAgent from "../../helpers/reduxWSWrapper"
import {
  USER_READS_MESSAGE,
  USER_ASKS_PREV_MESSAGES,
} from "../../helpers/constans"

const SensorCard = props => {
  const { isEdgeMsg, isMessageOwn, message } = props
  const { isRead } = props.message
  const [isCardViewed, markAsViewed] = useState(false)
  const isReceivedMsgUnread = (!isMessageOwn && !isRead)
  const isSensorActive = (isReceivedMsgUnread || isEdgeMsg) && !isCardViewed
  const handleCardViewing = isVisible => {
    if (isVisible) {
      let action
      if (isReceivedMsgUnread) {
        action = {
          type: USER_READS_MESSAGE,
          payload: {
            uuid: props.message.uuid,
          }
        }
        wsAgent.send(action)
      }
      if (isEdgeMsg) {
        action = {
          type: USER_ASKS_PREV_MESSAGES,
          payload: {
            partnerId: isMessageOwn ? message.recipientId : message.senderId,
            uuid: props.message.uuid,
          }
        }
        wsAgent.send(action)
      }
      markAsViewed(true)
    }
  }
  return (
    <VisibilitySensor
      active={isSensorActive}
      onChange={handleCardViewing}
    >
      <MessageCard {...props} />
    </VisibilitySensor>
  )
}

export default SensorCard