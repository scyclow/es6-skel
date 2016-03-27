import path from 'path';
import Express from 'express';

import webpack from 'webpack';
import webpackConfig from '../../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import React from 'react';
import { renderToString } from 'react-dom/server';
// import { Provider } from 'react-redux';

import App from '../containers/App';

const app = new Express();
const port = 3333;

if (process.env.NODE_ENV === 'development') {
  console.log('>>>>>>>>>>>>>>>>>>>>>')
  console.log('>>>>>>>>>>>>>>>>>>>>>')
  console.log('>>>>>>>>>>>>>>>>>>>>>')
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(renderResponse);

function renderResponse(req, res) {
  console.log(`Received request to ${req.url}`);
  const html = renderToString(<App thing="server" />);
  res.send(renderHTML(html));
  res.sendFile('/build/app.js', { root: path.join(__dirname, '../..') });
}

function renderHTML(html) {
  return `
    <doctype! html>
    <html>

    <head>
      <title>Title Here</title>
      <META charset="UTF-8">
      <META name="viewport" content="width=device-width, initial-scale=1.0">
      <META http-equiv="X-UA-Compatible" content="IE=Edge" />
      <META
        name="description"
        content="Describe app here"
      >
      <META
        name="keywords"
        content="god, sex, power, the, love, wealth, happiness"
      >
    </head>

    <body>
      <div id="app">${html}</div>
      <script src="/app.js"></script>
    </body>

    </html>
  `;
}

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.log(Date())
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
});
