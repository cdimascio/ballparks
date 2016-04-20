import Rx from 'rx';
import BallparksService from '../services/ballparks.service';
import WeatherService from '../services/weather.service';

const INTERVAL = 1000 * 60 * 60 * 1.5;

const _cache = {};
class BallparksWeatherService {

  all() {
    return BallparksService
      .all()
      .map(park => ({ ...park, weather: _cache[park.id] }));
  }

  byId(id) {
    return BallparksService
      .byId()
      .map(park => ({ ...park, weather: _cache[park.id] }));
  }

  start() {
    return Rx.Observable
      .timer(0, INTERVAL)
      //.flatMap(() => this._fakedata()); // TODO apply based on NODE_ENV
      .flatMap(() => this._update());
  }

  _update() {
    console.log('update weather data');
    return BallparksService
      .all()
      .flatMap(park => {
        return WeatherService.current({
          lat: park.lat,
          lon: park.long,
          units: 'e'
        })
        .do(x => {
          console.log(`${park.id}`,x);
          _cache[park.id]= x;
        });
      });
  }

  _fakedata() {
    const fakeData = { metadata:
    { language: 'en-US',
      transaction_id: '1459776299510:666958001',
      version: '1',
      latitude: 39.91,
      longitude: -75.17,
      units: 'e',
      expire_time_gmt: 1459776899,
      status_code: 200 },
      observation:
      { class: 'observation',
        expire_time_gmt: 1459776899,
        obs_time: 1459775100,
        obs_time_local: '2016-04-04T09:05:00-0400',
        wdir: 330,
        icon_code: 26,
        icon_extd: 2600,
        sunrise: '2016-04-04T06:38:59-0400',
        sunset: '2016-04-04T19:28:46-0400',
        day_ind: 'D',
        uv_index: 1,
        uv_warning: 0,
        wxman: 'wx1250',
        obs_qualifier_code: null,
        ptend_code: 2,
        dow: 'Monday',
        wdir_cardinal: 'NNW',
        uv_desc: 'Low',
        phrase_12char: 'Cloudy',
        phrase_22char: 'Cloudy',
        phrase_32char: 'Cloudy',
        ptend_desc: 'Falling',
        sky_cover: 'Cloudy',
        clds: 'OVC',
        obs_qualifier_severity: null,
        vocal_key: 'OT50:OX2600',
        imperial:
        { wspd: 5,
          gust: null,
          vis: 10,
          mslp: 1011.8,
          altimeter: 29.88,
          temp: 50,
          dewpt: 36,
          rh: 59,
          wc: 48,
          hi: 50,
          temp_change_24hour: 12,
          temp_max_24hour: 50,
          temp_min_24hour: 37,
          pchange: -0.02,
          feels_like: 48,
          snow_1hour: 0,
          snow_6hour: 0,
          snow_24hour: 0,
          snow_mtd: 0,
          snow_season: 26.1,
          snow_ytd: 26.1,
          snow_2day: 0,
          snow_3day: 0,
          snow_7day: 0,
          ceiling: 10300,
          precip_1hour: 0,
          precip_6hour: 0,
          precip_24hour: 0,
          precip_mtd: 0.64,
          precip_ytd: 9.7,
          precip_2day: 0.16,
          precip_3day: 0.64,
          precip_7day: 0.65,
          obs_qualifier_100char: null,
          obs_qualifier_50char: null,
          obs_qualifier_32char: null } } };

    return BallparksService
      .all()
      .map(park => {
        const data = fakeData;
        _cache[park.id] = fakeData;
        return {
          ...park,
          weather: data
        };
      });
  }
}

export default new BallparksWeatherService()