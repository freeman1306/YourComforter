import React, {createContext, useState, useEffect} from "react";
import {load, save} from "../helpers/localStorage";
import {GUEST} from "../helpers/userRoles";
import services from "../service";
import useBrowserContextCommunication from "react-window-communication-hook";


const savedUser = load("current_user");

let initialValue = {
    id: null,
    role: GUEST,
    firstName: null,
    lastName: null,
    avatar: null,
    emailActivated: null,
    subscriptionPlan: null,
    blocked: false
};

if (savedUser) initialValue = savedUser;

export const UserContext = createContext({
    ...initialValue,
    signIn: (token, user) => {
    },
    signOut: () => {
    },
    changeName: (firstName, lastName) => {
    },
    changeAvatar: avatar => {
    }
});

export const UserProvider = ({children}) => {
    const [communicationState, postMessage] = useBrowserContextCommunication("channel");
    const [user, setUser] = useState(initialValue);

    useEffect(() => {
      if (communicationState.lastMessage && communicationState.lastMessage.role !== user.role) {
        setUser({ ...communicationState.lastMessage });
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [communicationState.lastMessage]);

    const signIn = (token, user) => {
        setUser(user);
        save("token", token);
        save("current_user", user);
    };

    const changeName = (firstName, lastName) => {
        const updatedUser = {...user, firstName, lastName};
        setUser(updatedUser);
        save("current_user", updatedUser);
    };

    const changeAvatar = avatar => {
        const updatedUser = {...user, avatar};
        setUser(updatedUser);
        save("current_user", updatedUser);
    };

    const signOut = () => {
        setUser({id: null, role: GUEST, firstName: null, lastName: null, avatar: null, emailActivated: null, subscriptionPlan: null});
        postMessage({id: null, role: GUEST, firstName: null, lastName: null, avatar: null, emailActivated: null, subscriptionPlan: null})
        save("token", "");
        save("current_user", "");
    };

    const toggleActivation = async() => {
        try {
            const token = load("token");
            if (token) {
                const {userData} = await services.userService.getMySession(token);
                if (load('current_user').emailActivated !== userData.emailActivated) {
                    const updatedUser = {...user, ...userData};
                    setUser(updatedUser);
                    save("current_user", updatedUser);
                }
            }
        }
        catch (e){console.log(e)}
    };

    const togglePlanChange = async() =>{
        try {
            const token = load("token");
            if (token) {
                const plan = await services.userService.getUserPlan();
                if (load('current_user').subscriptionPlan !== plan) {
                    const updatedUser = {...user, subscriptionPlan: plan.subscriptionPlan};
                    setUser(updatedUser);
                    save("current_user", updatedUser);
                }
            }
        }
        catch (e){console.log(e)}
    }    

    return (
        <UserContext.Provider
            value={{
                ...user,
                signIn,
                changeName,
                changeAvatar,
                signOut,
                toggleActivation,
                togglePlanChange
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
