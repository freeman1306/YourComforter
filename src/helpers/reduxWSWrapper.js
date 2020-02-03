import services from "../service";
import { 
  USER_ASKS_PREV_MESSAGES,
  USER_SENDS_MESSAGE,
  USER_READS_MESSAGE,
} from "./constans";

class ReduxWSWrapper {
  constructor() {
    this.wsClient = null
  }
  connect(WS_ROOT, reduxStore) {
    this.wsRoot = WS_ROOT
    this.reduxStore = reduxStore
    this.establishWSConnection()
  }
  establishWSConnection() {
    this.wsClient = new WebSocket(this.wsRoot)
    const ws = this.wsClient
    ws.addEventListener("open", async e => {
      ws.send(JSON.stringify({
        "command":"subscribe",
        "identifier":"{\"channel\":\"ConversationChannel\"}"
      }))
      await services.messengerService.getUnreadMessages()
    })
    ws.addEventListener("close", e => {
      setTimeout(() => this.establishWSConnection(), 2000)
    }) 
    ws.addEventListener("error", e => {
      console.error("Websocket connection error", e)
    })
    ws.addEventListener("message", e => {
      // eslint-disable-next-line
      const rawData = e.data.replace(/\"({.+?})\"/g, "$1").replace(/\\\"/g, '"')
      //console.log(rawData)
      const data = JSON.parse(rawData)
      if (!data.message) return
      const { type, payload } = data.message
      if (!type || !payload) return
      const store = this.reduxStore
      store.dispatch({
        type,
        payload,
      })
    })
    this.wsClient = ws
  }
  send = async ({ type, payload }) => {
    const store = this.reduxStore
    let isSuccess = false
    switch(type) {
      case USER_ASKS_PREV_MESSAGES: 
        isSuccess = await services.messengerService.getPrevMessages(payload.uuid)
        break
      case USER_SENDS_MESSAGE:
        isSuccess = await services.messengerService.createMessage({
          uuid: payload.uuid,
          senderId: payload.senderId,
          recipientId: payload.recipientId,
          messageType: payload.type,
          body: payload.body,
        })
        break
      case USER_READS_MESSAGE:
        isSuccess = await services.messengerService.readMessage(payload)
        break
      default:
        console.error(`Unknown action type - ${type}`)
    }
    if (isSuccess) {
      store.dispatch({ type, payload })
    }
  }
}

const wsAgent = new ReduxWSWrapper()

export const createReduxWSWrapper = (WS_ROOT, reduxStore) => {
  if (!reduxStore) {
    // error
    return
  }
  wsAgent.connect(WS_ROOT, reduxStore)
}

export default wsAgent
window.wsAgent = wsAgent