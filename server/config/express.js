import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Env from './environment';
import * as express from 'express';

const config = Env.getConf();
class Express {
  static init(app) {
    app.set('appPath', config.root + 'client');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser(config.sessionSecret));
    app.use(express.static(config.root + '/public'));
  }
}

export default Express;