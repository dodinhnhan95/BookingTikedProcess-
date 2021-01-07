import React from "react";
import Header from "../Component/Header";
import { Route } from "react-router-dom";
import Footer from "../Component/Footer";

export const HomeTemplate = (props) => {
  let { Component, ...resParam } = props;
  return (
    <Route
      {...resParam}
      render={(propsRoute) => {
        return (
          <>
            <div style={{ position: "relative" }}>
              <Header />
              <Component {...propsRoute} />
              <Footer />
            </div>
          </>
        );
      }}
    />
  );
};
