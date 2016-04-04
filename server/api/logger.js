import bunyan from 'bunyan';
import Config from '../config';

export class L {
  constructor(module) {
    if (!module) { throw Error(`${this.constructor.name}: module required`); }
    this.module = module;
  }

  info(method, msg) {
    return L.B.info(this._props(method), msg);
  }

  error(method, msg) {
    return L.B.error(this._props(method), msg);
  }

  warn(method, msg) {
    return L.B.warn(this._props(method), msg);
  }

  debug(method, msg) {
    return L.B.debug(this._props(method), msg);
  }

  trace(method, msg) {
    return L.B.trace(this._props(method), msg);
  }

  _props(method) {
    return {module: this.module, method};
  }
}

L.B = bunyan.createLogger({name: Config.getConf().appId});
L.B.level(Config.getConf().logger.level);