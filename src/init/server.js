import React from 'react';
import path from 'path';
import Koa from 'koa';
import Router from 'koa-router';
import compress from 'koa-compress';
import serve from 'koa-static';
import mount from 'koa-mount';
import views from 'koa-views';
import zLib from 'zlib';
import nodeJsx from 'node-jsx';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import api from '../api';
import { routes } from '../routes';
import { store } from '../client/store/store';

const ONE_YEAR_IN_MILLIS = 31557600000;
const APP_PORT_NUM = process.env.PORT || 3000;

const app = new Koa();
const router = new Router();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('koa-webpack-dev-middleware');
  const webpackHotMiddleware = require('koa-webpack-hot-middleware');

  const webpackConfig = require('../config/webpack.config.dev.babel.js').default;
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }));
}

/**
 * Transpile Jsx from node.
 * */
nodeJsx.install();

/**
 * Gzip compression
 * */
app.use(compress({
  threshold: 0,
  level: zLib.Z_BEST_COMPRESSION
}));

/**
 * Indicating our static folder and setting caching duration
 * */
app.use(mount('/dist', serve(path.resolve(__dirname, '../../dist/'), { maxAge: ONE_YEAR_IN_MILLIS })));

/**
 * View engine Handlebars
 * */
app.use(views(path.resolve(__dirname, '../views/layout'), {
  map: {
    hbs: 'handlebars',
  },
  extension: 'hbs',
  options: {
    partials: {
      head: './partials/head',
      embeds: './partials/embeds',
    }
  }
}));

/**
 * Bind the APIs
 * */
api(router);
app.use(router.routes());

/**
 * Handle status codes and direct all other paths to react-router.
 * */
app.use(async (ctx) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={ctx.url}
        context={ctx}
      >
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );
  if (/^\/images\//.test(ctx.url)) {
    ctx.status = 301;
    ctx.redirect(`/dist${ctx.url}`);
  } else {
    ctx.status = 200;
    await ctx.render('index', { reactOutput: content });
  }
});

app.listen(APP_PORT_NUM, () => console.log(`Server running at http://localhost:${APP_PORT_NUM}`));