import React from "react";
import { Route, Redirect } from "react-router-dom";
import Dashboard from "../Dashboard";

const ProtectedRoute = ({ token, ...rest }) => {
  return token ? (
    <Route {...rest} component={Dashboard} />
  ) : (
    <Redirect to="/login" />
  );
};

export default ProtectedRoute;
