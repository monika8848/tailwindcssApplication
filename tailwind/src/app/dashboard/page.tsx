"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/slice/store";
import MasterDashboard from "../Components/Dashboard/MasterDashboard";

const dashboard = () => {
  return (
    <>
      <Provider store={store}>
        <MasterDashboard />
      </Provider>
    </>
  );
};

export default dashboard;
