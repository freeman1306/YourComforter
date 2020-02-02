import { timeGenerator } from "./timeGenerator";

export let query = [];
const times = timeGenerator();

export default {
  getStateFromUrl: (search, baseState) => {
    // changing state according to parameters received from URL
    let state = { ...baseState };
    let stateObj = {};
    if (search !== "") {
      const searches = search.substr(1).split("&");
      for (let i in searches) {
        const obj = searches[i].split("=");
        Object.assign(stateObj, { ...stateObj, [obj[0]]: obj[1] }); // formatting stateObj as a provider for changing base state
      }
    }
    for (let key in stateObj) {
      if (key === "age_from") {
        // age_from == state.age.min
        Object.assign(state, {
          ...state,
          age: {
            ...state.age,
            min: parseInt([stateObj.age_from])
          }
        });
      } else if (key === "age_to") {
        // age_to == state.age.max
        Object.assign(state, {
          ...state,
          age: {
            ...state.age,
            max: parseInt([stateObj.age_to])
          }
        });
      } else if (key === "sort_direction") {
        const val =
          stateObj[key] === "asc"
            ? { id: "asc", value: "Sort by price Low-High" }
            : { id: "desc", value: "Sort by price High-Low" };
        Object.assign(state, {
          ...state,
          sort: val
        });
      } else if (key === "is_favorite") {
        // is_favorite == state.is_favorite
        Object.assign(state, {
          ...state,
          is_favorite: Boolean(stateObj.is_favorite)
        });
      } else if (key === "date") {
        Object.assign(state, {
          ...state,
          date: stateObj.date
        });
      } else if (key === "from") {
        // from == state.times.from.id
        const from = times.filter(el => {
          if (el.id === stateObj.from) {
            return el;
          }
          return null;
        });
        Object.assign(state, {
          ...state,
          time: { ...state.time, from: from[0] }
        });
      } else if (key === "to") {
        // to == state.times.to.id
        const to = times.filter(el => {
          if (el.id === stateObj.to) {
            return el;
          }
          return null;
        });
        Object.assign(state, {
          ...state,
          time: { ...state.time, to: to[0] }
        });
      } else if (key === "location[]") {
        const cities = [];
        const arrayOfCities = stateObj["location[]"]
          .replace(/%20/g, " ")
          .replace(/%E2%80%91/g, "-")
          .split(",");
        for (let i in arrayOfCities) {
          let c = {};
          c = Object.assign(c, { name: arrayOfCities[i] });
          cities.push(c);
        }
        Object.assign(state, {
          ...state,
          city: [...state.city, ...cities]
        });
      } else if (key === "query") {
        Object.assign(state, {
          ...state,
          query: stateObj.query.replace(/%20/, " ")
        });
      } else if (key === "services[]") {
        const serviceIDs = stateObj[key].split(","); // receive services IDs from the URL
        for (let i in serviceIDs) {
          const newServices = state.services.map(el => {
            if (el.id === parseInt(serviceIDs[i])) {
              // If there is a service with the same id in the state we marked it as checked
              return { ...el, checked: true };
            }
            return el;
          });
          Object.assign(state, {
            ...state,
            services: newServices
          });
        }
      } else if (key === "roles[]") {
        const roleNames = stateObj[key].split(","); // receive services IDs from the URL
        for (let i in roleNames) {
          const newRoles = state.roles.map(el => {
            if (el.name === roleNames[i]) {
              // If there is a service with the same id in the state we marked it as checked
              return { ...el, checked: true };
            }
            return el;
          });
          Object.assign(state, {
            ...state,
            roles: newRoles
          });
        }
      }
      else if(key === 'rate'){
          Object.assign(state, {
              ...state,
              rate: stateObj.rate
          });
      }
    }
    return state;
  },

  queryGenerator: (state, baseState) => {
    let valuesOfState = Object.values(state); // receive all values from the state
    let keysOfState = Object.keys(state); // receive all keys from the state

    for (let i = 0; i < valuesOfState.length; i++) {
      if (keysOfState[i] !== "filterVisible" && keysOfState[i] !== "cityInput") {
        // These fields are not included in the request
        if (keysOfState[i] === "is_favorite" && valuesOfState[i]) {
          query.push(`${keysOfState[i]}=${valuesOfState[i]}&`);
        } else if (keysOfState[i] === "city" && valuesOfState[i].length > 0) {
          let location = ["location[]="];
          for (let city in valuesOfState[i]) {
            const cityName = valuesOfState[i][city].name;
            location.push(`${cityName},`);
          }
          location = location.join("");
          location = location.substr(0, location.length - 1).concat(location.substr(location.length, location.length));
          query.push(`${location}&`);
        } else if (keysOfState[i] === "services" && valuesOfState[i].length > 0) {
          let services = ["services[]="];
          for (let service in valuesOfState[i]) {
            if (valuesOfState[i][service].checked) {
              services.push(`${valuesOfState[i][service].id},`);
            }
          }
          if (services.length > 1) {
            services = services.join("");
            services = services
              .substr(0, services.length - 1)
              .concat(services.substr(services.length, services.length));
            query.push(`${services}&`);
          }
        } else if (keysOfState[i] === "roles" && (valuesOfState[i][0].checked || valuesOfState[i][1].checked)) {
          let roles = ["roles[]="];
          for (let role in valuesOfState[i]) {
            if (valuesOfState[i][role].checked) {
              roles.push(`${valuesOfState[i][role].name},`);
            }
          }
          if (roles.length > 1) {
            roles = roles.join("");
            roles = roles
              .substr(0, roles.length - 1)
              .concat(roles.substr(roles.length, roles.length));
            query.push(`${roles}&`);
          }
        } else if (keysOfState[i] === "date" && valuesOfState[i] !== baseState.date) {
          query.push(`${keysOfState[i]}=${valuesOfState[i]}&`); // Push date to the array as a string
        } else if (keysOfState[i] === "time") {
          for (let time in valuesOfState[i]) {
            // Loop for going through time object from the state
            if (valuesOfState[i][time].value != null) {
              // Check if value != null
              query.push(`${time}=${valuesOfState[i][time].id}&`); // adding time frames to the query in formatting ex. from = 11.00AM
            }
          }
        } else if (keysOfState[i] === "age") {
          for (let age in valuesOfState[i]) {
            if (valuesOfState[i][age] != null) {
              query.push(`${age.replace("min", "age_from").replace("max", "age_to")}=${valuesOfState[i][age]}&`);
            }
          }
        } else if (keysOfState[i] === "rate") {
          if(valuesOfState[i]>0){
            query.push(`${keysOfState[i]}=${valuesOfState[i]}&`);
          }
        }
      }
    }
    return query.join("");
  },
  clearQuery: () => {
    query = [];
  }
};
