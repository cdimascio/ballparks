import Config from '../../config';
import Rx from 'rx';
import rp from 'request-promise';

const apiRoot = Config.getConf().weatherApiRoot;

class WeatherService {
  current({units, lat, lon, lang}) {
    const qs = {
      units: units || 'm',
      geocode: `${lat},${lon}`,
      language: lang || 'en-US'
    };

    return Rx.Observable.fromPromise(rp({
      method: 'GET',
      uri: `${apiRoot}/api/weather/v2/observations/current`,
      qs,
      json: true
    }));
  }
}

export default new WeatherService();