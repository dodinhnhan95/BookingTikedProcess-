import React from "react";
import Header from "../Component/Header";
import { Route } from "react-router-dom";
import Footer from "../Component/Footer";
import Caroulsel2 from "../Component/Caroulsel2";
export const UserTemplate = (props) => {
  let { Component, ...resParam } = props;
  return (
    <Route
      {...resParam}
      render={(propsRoute) => {
        return (
          <>
            <Component {...propsRoute} />
          </>
        );
      }}
    />
  );
};
