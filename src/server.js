import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import App from "./component/App";

const app = express();
const port = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname)));

app.get("/", (req, res) => {
  const sheet = new ServerStyleSheet();
  try {
    const html = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <App />
      </StyleSheetManager>
    );
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
    const htmlStr = `
    <!doctype html>
    <html>
      <head>
      <title>Getting Started</title>
      ${styleTags}
      </head>
      <body>
        <div id="root">${html}</div>
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
