import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Env from './environment';
import * as express from 'express';


const config = Env.getConf();

class Express {
  static init(app) {
    app.set('appPath', config.root + 'client');
    //app.use(function(req, res, next){
    //  if (req.is('text/*')) {
    //    req.text = '';
    //    req.setEncoding('utf8');
    //    req.on('data', function(chunk){ req.text += chunk });
    //    req.on('end', next);
    //  } else {
    //    next();
    //  }
    //});
    app.use(bodyParser.text());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookieParser(config.sessionSecret));

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

    app.use(express.static(config.root + '/client/static'));

    var path = require('path');
    app.get('/', function(req, res) {
      res.sendFile(path.resolve(config.root +'/client/index.html'));
    });
  }
}

export default Express;