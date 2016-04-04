import * as http from 'http';
import Environment from './environment';
import Express from './express';
import * as os from 'os';

class App {
  initialize(app, registerRoutes) {
    this._expressApp = app;
    this._l = new (require('../api/logger')).L('Server');
    Express.init(app);
    registerRoutes(app);
    return this;
  }

  listen() {
    const port = Environment.getConf().port;
    const welcome = (port, msg) => () => this._l.info(msg,
      `up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname() } on port: ${port}}`);
    http.createServer(this._expressApp).listen(port, welcome(port));
  }

  getConf() {
    return Environment.getConf();
  }
}

export default new App();