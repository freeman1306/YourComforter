import React, { useState, useEffect, createContext } from "react";

export const DropDownContext = createContext({
  openDropDownIndex: "",
  toogleDropdown: () => {}
});

export const DropDownContextProvider = ({ children, isEdit }) => {
  const [openDropDownIndex, setOpenDropDownIndex] = useState("");

  useEffect(() => {
    setOpenDropDownIndex("");
  }, [isEdit]);

  const toogleDropdown = index => {
    if (openDropDownIndex === index) {
      setOpenDropDownIndex("");
    } else {
      setOpenDropDownIndex(index);
    }
  };

  return (
    <DropDownContext.Provider
      value={{
        openDropDownIndex,
        toogleDropdown: index => toogleDropdown(index)
      }}
    >
      {children}
    </DropDownContext.Provider>
  );
};

export const withDropDown = WrappedComponent => props => (
  <DropDownContext.Consumer>{state => <WrappedComponent {...props} context={state} />}</DropDownContext.Consumer>
);
