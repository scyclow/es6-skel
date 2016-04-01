import path from 'path';
import Express from 'express';
import PrettyError from 'pretty-error';

import webpack from 'webpack';
import webpackConfig from '../../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { Presets, StyleSheet, LookRoot, Plugins } from 'react-look';

import configureStore from '../store';
import App from '../containers/App';

const pe = new PrettyError();
pe.start();

const app = new Express();
const port = 3333;

const styleConfig = Presets['react-dom'];
styleConfig.styleElementId = '_look';
// turn off for prod
styleConfig.plugins.push(Plugins.friendlyClassName);

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    contentBase: 'http://localhost:' + port,
    hot: true,
    inline: true,
    lazy: false,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true }
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(renderResponse);

function renderResponse(req, res) {
  console.log(`Received request to ${req.url}`);

  const initialState = { something: { something: 'server nonsense' } };
  const store = configureStore(initialState);

  styleConfig.userAgent = req.headers['user-agent'];

  // enable for production only -- otherwise, overrides hr styles
  const appCSS = null;
  // const appCSS = StyleSheet.renderToString(styleConfig.prefixer)

  const html = renderToString(
    <Provider store={store}>
      <LookRoot config={styleConfig}>
        <App />
      </LookRoot>
    </Provider>
  );
  res.send(renderHTML(html, initialState, appCSS));

  // FIXME -- why do I need to explicitly send it off here?
  // Leading to the following error:
  // Error: Can't set headers after they are sent.
  res.sendFile('/build/app.js', { root: path.join(__dirname, '../..') });
}

function renderHTML(html, initialState, css) {
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
      <style>${css}</style>
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
