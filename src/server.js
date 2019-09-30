import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { StaticRouter } from "react-router-dom";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { Provider } from "react-redux";
import configureSotre from "./configureSotre";
import App from "./component/App";

const app = express();
const port = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname)));

app.get("*", (req, res) => {
  const store = configureSotre({
    todos: ["abcdefg"],
    counter: 3
  });
  const sheet = new ServerStyleSheet();
  const context = {};
  try {
    const html = renderToString(
      <Provider store={store}>
        <StyleSheetManager sheet={sheet.instance}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </StyleSheetManager>
      </Provider>
    );
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
    const preloadedState = store.getState();

    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      res.redirect(301, context.url);
      return;
    }
    const htmlStr = `
    <!doctype html>
    <html>
      <head>
      <title>Getting Started</title>
      ${styleTags}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\u003c"
          )}
        </script>
        <script src="main.js"></script>
      </body>
    </html>
    `;

    res.type("html");
    res.send(htmlStr);
  } catch (error) {
    // handle error
    console.error(error);
  } finally {
    sheet.seal();
  }
});

app.listen(port, () => {
  console.log(`server listen on: ${port} port`);
});
