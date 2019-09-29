import React from "react";
import { Redirect } from "react-router-dom";
import Home from "./pages/Home";
import PageTwo from "./pages/PageTwo";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/pagetwo",
    component: PageTwo
  },
  {
    path: "/redirect",
    component: () => <Redirect to="/" />
  },
  {
    component: () => <h1>404 Not Found!</h1>
  }
];

export default routes;
