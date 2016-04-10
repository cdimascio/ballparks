import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Env from './environment';
import * as express from 'express';


const config = Env.getConf();

class Express {
  static init(app) {
    app.set('appPath', config.root + 'client');
    app.use(bodyParser.text());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookieParser(config.sessionSecret));

    (function () {
      if (process.env.NODE_ENV !== 'production') {

        const webpack = require('webpack');
        const webpackConfig = require('./../../webpack.config');
        const compiler = webpack(webpackConfig);

        app.use(require("webpack-dev-middleware")(compiler, {
          noInfo: true, publicPath: webpackConfig.output.publicPath
        }));

        app.use(require('webpack-hot-middleware')(compiler, {
          log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
        }));
      } else {
        app.use(express.static(config.root + '/client/dist'));
      }
    })();

    app.use(express.static(config.root + '/client/static'));

    let path = require('path');
    app.get('/', function(req, res) {
      res.sendFile(path.resolve(config.root +'/client/index.html'));
    });
  }
}

export default Express;