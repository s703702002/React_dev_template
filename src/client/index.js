import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureSotre from "../configureSotre";
import App from "../component/App";

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = configureSotre(preloadedState);

const render = (Component) => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept();
}
