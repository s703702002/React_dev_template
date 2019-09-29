import React from "react";
import ReactDOM from "react-dom";
import App from "../component/App";

const render = Component => {
  ReactDOM.hydrate(<Component />, document.getElementById("root"));
};

render(App);

if (module.hot) {
  module.hot.accept();
}
