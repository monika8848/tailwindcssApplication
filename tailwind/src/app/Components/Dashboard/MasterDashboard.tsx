import React from "react";
import Dashboard from "./Dashboard";
import User from "./User";
import Cards from "./Cards";

const MasterDashboard = () => {
  return (
    <>
      <Dashboard />
      <User />
      <Cards />
    </>
  );
};

export default MasterDashboard;
