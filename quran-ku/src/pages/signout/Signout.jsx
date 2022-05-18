import React from "react";
import Button from "../../components/button/Button";

import { Navigate } from "react-router-dom";

const Signout = () => {
  localStorage.clear();
  return <Navigate to={"/home"} />;
};

export default Signout;
