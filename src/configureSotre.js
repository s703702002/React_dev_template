import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";

function configureSotre(preloadedState) {
  const middlewares = [];

  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  );
  const store = createStore(rootReducer, preloadedState, enhancer);

  if (process.env.NODE_ENV === "development") {
    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
      module.hot.accept("./reducer/index.js", () =>
        store.replaceReducer(require("./reducer/index.js").default)
      );

      // module.hot.accept("../sagas/SagaManager", () => {
      //   SagaManager.cancelSagas(store);
      //   require("../sagas/SagaManager").default.startSagas(sagaMiddleware);
      // });
    }
  }

  return store;
}

export default configureSotre;
