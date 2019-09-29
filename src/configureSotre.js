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

  return store;
}

export default configureSotre;
