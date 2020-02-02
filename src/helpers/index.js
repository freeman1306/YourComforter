import moment from "moment";
import { messageTypes } from "./constans";

export const isMobileDevice = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
export const isIE11 = () => !!window.MSInputMethodContext && !!document.documentMode;

export const getShortTimeRangeFromNodeList = nodeList => {
  let timeRange = "";
  if (nodeList.length > 0) {
    if (nodeList.length > 1) {
      timeRange = `${nodeList[0].dataset.time} - ${nodeList[nodeList.length - 1].dataset.endTime}`;
    } else {
      timeRange = `${nodeList[0].dataset.time} - ${nodeList[0].dataset.endTime}`;
    }
  }

  return timeRange;
};

export const getDateFromNodeLit = (nodeList, format = "YYYY-MM-DD:HH-mm") => {
  let selectedTimeArray = [];
  if (nodeList.length > 0) {
    for (let i = 0; i < nodeList.length; i++) {
      const time = moment(nodeList[i].dataset.fulltime, "YYYY-MM-DD:HH-mm").format(format);
      selectedTimeArray.push(time);
    }
  }

  return selectedTimeArray;
};

export const getDatesArrayBetweenDates = (from, to, formatDate) => {
  const currentDate = moment(from, formatDate).set({
    minute: 0
  });
  const lastDate = moment(to, formatDate).set({
    minute: 0
  });
  let dates = [];
  if (currentDate.isBefore(lastDate)) {
    while (currentDate.isSameOrBefore(lastDate)) {
      dates.push(currentDate.format(formatDate));
      currentDate.add(1, "hours");
    }

    dates[0] = from;
    dates[dates.length - 1] = dates.length === 2 ? from : to;
  } else {
    return [];
  }

  return dates;
};

export const processingBusyTimes = busyDates => {
  const delta = busyDates.map(date => {
    const orderTimeArray = getDatesArrayBetweenDates(date[0], date[1], "YYYY-MM-DD:HH-mm");
    orderTimeArray.pop();
    return orderTimeArray;
  });

  let busyDatesArray = [];

  for (let i = 0; i < delta.length; i++) {
    const order = delta[i];
    for (let j = 0; j < order.length; j++) {
      const time = order[j];
      busyDatesArray.push(time);
    }
  }

  return busyDatesArray;
};

export const filterDatesForSpecificDay = (day, busyDate, unavailableDates) => {
  const busy = busyDate
    .filter(date => moment(date, "YYYY-MM-DD:HH-mm").format("YYYY-MM-DD") === moment(day).format("YYYY-MM-DD"))
    .map(date =>
      moment(date, "YYYY-MM-DD:HH-mm")
        .minutes(0)
        .format("hh:mm A")
    );
  const unavailable = unavailableDates.map(date => moment(date, "HH-mm").format("hh:mm A"));

  return [...busy, ...unavailable];
};

export const isUnavailableDatesBetweenSelected = (unavailableDates, startTime, endTime) => {
  const beforeTime = moment(startTime, "hh:mm A");
  const afterTime = moment(endTime, "hh:mm A");
  for (let index = 0; index < unavailableDates.length; index++) {
    const time = moment(unavailableDates[index], "hh:mm A").minutes(0);
    if (time.isBetween(beforeTime, afterTime)) {
      return true;
    }
  }

  return false;
};

export const isCloseToBusyTime = (unavailableDates, startTime) => {
  const time = moment(startTime, "hh:mm A");
  for (let index = 0; index < unavailableDates.length; index++) {
    const unavailableTime = moment(unavailableDates[index], "hh:mm A");
    if (time.diff(unavailableTime, "minutes") <= 60) {
      return true;
    }
  }

  return false;
};

export const getPartnerUnreadMsgsCount = (userId, partner) => {
  let unreadMsgsCount = 0
  if (partner.messages) {
    partner.messages.forEach(message => {
      const { isRead, recipientId } = message
      if (!isRead && recipientId === userId) {
        unreadMsgsCount++
      }
    })
  } 
  return unreadMsgsCount
}

export const getAllUnreadMsgsCount = (userId, partners) => {
  let unreadMsgsCount = 0
  if (partners) {
    partners.forEach(partner => {
      unreadMsgsCount += getPartnerUnreadMsgsCount(userId, partner)
    })
  }
  return unreadMsgsCount
}

export const getPartnerSystemUnreadMsgsCount = (userId, partner) => {
  let unreadMsgsCount = 0
  if (partner.messages) {
    partner.messages.forEach(message => {
      const { isRead, recipientId, type } = message
      if (!isRead && type === messageTypes.system && recipientId === userId) {
        unreadMsgsCount++
      }
    })
  } 
  return unreadMsgsCount
}

export const getSystemUnreadMsgsCount = (userId, partners) => {
  let unreadMsgsCount = 0
  if (partners) {
    partners.forEach(partner => {
      unreadMsgsCount += getPartnerSystemUnreadMsgsCount(userId, partner)
    })
  }
  return unreadMsgsCount
}

export const readFile = file => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
};
