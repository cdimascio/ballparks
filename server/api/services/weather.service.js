import Rx from 'rx';
import rp from 'request-promise';
const apiRoot = process.env.WEATHER_API_ROOT;

class WeatherService {
  current({units, lat, lon, lang}) {
    const qs = {
      units: units || 'm',
      geocode: `${lat},${lon}`,
      language: lang || 'en-US'
    };

    return Rx.Observable.fromPromise(rp({
      method: 'GET',
      'uri': `${apiRoot}/observations/current`,
      qs,
      json: true
    }));
  }
}

export default new WeatherService();