import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Env from './environment';
import * as express from 'express';


const config = Env.getConf();

class Express {
  static init(app) {
    app.set('appPath', config.root + 'client');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookieParser(config.sessionSecret));
    //app.use(express.static(config.root + '/client/'));


    //if (config.nodeEnv !== 'production') {
    //  console.log('install dev middleware',webpackConfig.output.publicPath);
    //  var compiler = webpack(webpackConfig);
    //  app.use(require('webpack-dev-middleware')(compiler, {
    //    noInfo: true,
    //    publicPath: webpackConfig.output.publicPath
    //  }));
    //  app.use(require('webpack-hot-middleware')(compiler));
    //  //  , {
    //  //  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    //  //}));
    //} else {
    //  app.use('/static', express.static(path.join(__dirname, '/client/dist')));
    //}

    (function() {


      // Step 1: Create & configure a webpack compiler
      var webpack = require('webpack');
      var webpackConfig = require('./../../webpack.config');
      //var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
      var compiler = webpack(webpackConfig);

      // Step 2: Attach the dev middleware to the compiler & the server
      app.use(require("webpack-dev-middleware")(compiler, {
        noInfo: true, publicPath: webpackConfig.output.publicPath
      }));

      // Step 3: Attach the hot middleware to the compiler & the server
      app.use(require("webpack-hot-middleware")(compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
      }));
    })();

    var path = require('path');
    app.get('/', function(req, res) {
      res.sendFile(path.resolve(__dirname + '/../../client/index.html'));
    });
  }
}

export default Express;