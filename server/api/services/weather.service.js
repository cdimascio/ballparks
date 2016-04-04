import Rx from 'rx';
import rp from 'request-promise';
const apiRoot = 'https://bbc58657-5560-4a77-af8e-2f1a58100eac:vyGyxlP4FF@twcservice.mybluemix.net/api/weather/v2/';

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