import Rx from 'rx';
import rp from 'request-promise';

export default class WeatherService {
  constructor(config) {
    this._apiRoot = config.weather.apiRoot;
  }
  current({units, lat, lon, lang}) {
    if (!this._apiRoot) {
      throw Error('rx-ballparks-services configuration must specify weather api root');
    }
    const qs = {
      units: units || 'm',
      language: lang || 'en-US'
    };

    console.log('Fetching weather data', `${this._apiRoot}/api/weather/v1/geocode/${lat}/${lon}/observations.json`);

    return Rx.Observable.fromPromise(rp({
      method: 'GET',
      uri: `${this._apiRoot}/api/weather/v1/geocode/${lat}/${lon}/observations.json`,
      qs,
      json: true
    }));
  }
}
