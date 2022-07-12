import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

export const MainContext = createContext();

const initialState = {
  surah: [],
};

export const MainProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setSurahs = (surahs) => {
    dispatch({
      type: "SET_SURAHS",
      payload: surahs,
    });
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
