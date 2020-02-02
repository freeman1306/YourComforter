export const USER_SIGN_IN_REQUEST = "USER_SIGN_IN_REQUEST";
export const USER_LOGOUT = "USER_LOGOUT";
export const GET_COMFOTERS = "GET_COMFOTERS";
export const GET_ORDERS = "GET_ORDERS";

export const SERVER_SENDS_CONVERSATIONS = "SERVER_SENDS_CONVERSATIONS"
export const SERVER_FORWARDS_MESSAGE = "SERVER_FORWARDS_MESSAGE"
export const SERVER_UPDATES_MESSAGE = "SERVER_UPDATES_MESSAGE"
export const SERVER_ADDS_PARTNER = "SERVER_ADDS_PARTNER"
export const SERVER_CHANGES_PARTNER_STATUS = "SERVER_CHANGES_PARTNER_STATUS"
export const SERVER_SENDS_PREV_MESSAGES = "SERVER_SENDS_PREV_MESSAGES"
export const USER_ASKS_PREV_MESSAGES = "USER_ASKS_PREV_MESSAGES"
export const USER_SENDS_MESSAGE = "USER_SENDS_MESSAGE"
export const USER_READS_MESSAGE = "USER_READS_MESSAGE"
export const GET_SERVICES = "GET_SERVICES";
export const GET_ORDERS_COMPLETED = "GET_ORDERS_COMPLETED";
export const GET_STATISTICS_SUCCESS = "GET_STATISTICS_SUCCESS";
export const GET_STATISTICS_ERROR = "GET_STATISTICS_SUCCESS";
export const GET_USERS = "GET_USERS";

export const messageTypes = {
  text: "text",
  system: "system",
}

export const orderStatusCodes = {
  10: `You have requested a customer service`,
  11: `has requested your service`,
  20: `You have been pre-paid for the customer service`,
  21: `have been prepaid for the service`,
  30: `You canceled the customer service`,
  31: `have declined your service`,
  40: `You have been confirmed successful completion of the order`,
  41: `confirmed successful order completion`,
  50: `Successful completion of the order is automatically confirmed`,
  51: `Successful order completion automatically confirmed`,
  60: `You have been started a dispute`,
  61: `opens a dispute`,

  110: `has accepted your order`,
  111: `You have accepted the order`,
  120: `has rejected your order`,
  121: `You have rejected the order`,
  130: `started work on your order`,
  131: `You started work on the order`,
  140: `canceled the order`,
  141: `You have canceled the order`,
  150: `completed your order`,
  151: `You have completed the order`,
  160: `canceled order`,
  161: `You have canceled the order`,
  170: `initiated a dispute`,
  171: `You have started a dispute`,
}