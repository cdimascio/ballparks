import Rx from 'rx';
import BallparksService from './ballparks.service';

const INTERVAL = 1000 * 60 * 60 * 1.5;

const _cache = {};
export default class BallparksWeatherService {
  constructor(config, weatherService) {
    this._useMockData = config.weather && config.weather.useMockData;
    this._weatherService = weatherService;
  }


  all() {
    return BallparksService
      .all()
      .map(park => ({ ...park, weather: _cache[park.id] }))
      .toArray();
  }

  byId(id) {
    return BallparksService
      .byId()
      .map(park => ({ ...park, weather: _cache[park.id] }));
  }

  start() {
    const $stream = Rx.Observable
      .timer(0, INTERVAL);
    return this._useMockData ?
      $stream.flatMap(() => this._fakedata()) :
      $stream.flatMap(() => this._update());
  }

  _update() {
    console.log('update weather data');
    return BallparksService
      .all()
      .flatMap(park => {
        return this._weatherService.current({
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
    console.log('fake weather data');

    const fakeData = {
      'metadata': {
        'language': 'en-US',
        'transaction_id': '1472927083263:-1299487047',
        'version': '1',
        'latitude': 45.42,
        'longitude': 75.69,
        'units': 'e',
        'expire_time_gmt': 1472937300,
        'status_code': 200
      },
      'observation': {
        'key': '36821',
        'class': 'observation',
        'expire_time_gmt': 1472937300,
        'obs_id': '36821',
        'obs_name': 'Bakanas',
        'valid_time_gmt': 1472925600,
        'day_ind': 'N',
        'temp': 69,
        'wx_icon': 29,
        'icon_extd': 2900,
        'wx_phrase': 'Partly Cloudy',
        'pressure_tend': 1,
        'pressure_desc': 'Rising',
        'dewPt': 54,
        'heat_index': 69,
        'rh': 60,
        'pressure': 28.53,
        'vis': null,
        'wc': null,
        'wdir': null,
        'wdir_cardinal': null,
        'gust': null,
        'wspd': null,
        'max_temp': 94,
        'min_temp': null,
        'precip_total': null,
        'precip_hrly': null,
        'snow_hrly': null,
        'uv_desc': 'Low',
        'feels_like': 69,
        'uv_index': 0,
        'qualifier': null,
        'qualifier_svrty': null,
        'blunt_phrase': null,
        'terse_phrase': null,
        'clds': 25,
        'water_temp': null,
        'primary_wave_period': null,
        'primary_wave_height': null,
        'primary_swell_period': null,
        'primary_swell_height': null,
        'primary_swell_direction': null,
        'secondary_swell_period': null,
        'secondary_swell_height': null,
        'secondary_swell_direction': null
      }
    };

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