import * as path from 'path';;

class Environment {
  static getConf() {
    const env = process.env;
    return {
      appId: 'myapp',
      root: path.normalize(__dirname + '/../../..'),
      port: env.PORT || 3000,
      logger: {
        level: env.LOG_LEVEL || 'debug'
      },
      nodeEnv: process.env.NODE_ENV
    };
  }
}

export default Environment;