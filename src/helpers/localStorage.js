export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const load = item => {
  try {
    const serializedState = localStorage.getItem(item);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    // ignore write errors
  }
};

const setCookie = (name, value, days) => {
  let expires = ""
  if (days) {
      let date = new Date()
      date.setTime(date.getTime() + (days*24*60*60*1000))
      expires = `expires=${date.toUTCString()}`
  }
  const domain = `domain=.yourcomforter.qa.leansquad.net`
  document.cookie = `${name}=${value || ""}; ${expires}; ${domain}; path=/`
}

export const save = (name, value) => {
  try {
    const serializedState = JSON.stringify(value)
    localStorage.setItem(name, serializedState)
    if (name === "token") {
      setCookie(name, value, 14)
    }
  } catch (error) {
    // ignore write errors
  }
};
