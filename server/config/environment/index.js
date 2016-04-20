import * as path from 'path';;

let weatherApiRoot;

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
      nodeEnv: process.env.NODE_ENV,
      weatherApiRoot: Environment._getWeatherApiRoot(env)
    };
  }

  static _getWeatherApiRoot(env) {
    if (weatherApiRoot) {
      return weatherApiRoot;
    }

    const apiRoot = env.WEATHER_API_ROOT;
    if (apiRoot) {
      console.log('apiRoot (env)', apiRoot);
      return weatherApiRoot = apiRoot;
    }

    if (env.VCAP_SERVICES) {
      const vcap = JSON.parse(env.VCAP_SERVICES);
      const apiRoot = vcap.weatherinsights[0].credentials.url;
      console.log('apiRoot (vcap)', apiRoot);
      return weatherApiRoot = apiRoot;
    }

    console.log('apiRoot (missing)', null);
    return null;
  };
}

export default Environment;