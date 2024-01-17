"use client";
import React from "react";
import Dasboard from "../Components/Dashboard/Dashboard";
import { Provider } from "react-redux";
import { store } from "../store/slice/store";

const dashboard = () => {
  return (
    <>
      <Provider store={store}>
        <Dasboard />
      </Provider>
    </>
  );
};

export default dashboard;
