import path from 'path';
import Express from 'express';

import webpack from 'webpack';
import webpackConfig from '../../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import configureStore from '../store';
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

  const initialState = { something: { something: 'server nonsense' } };
  const store = configureStore(initialState);

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  res.send(renderHTML(html, initialState));
  res.sendFile('/build/app.js', { root: path.join(__dirname, '../..') });
}

function renderHTML(html, initialState) {
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
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
      </script>
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
