import BallparksService from '../ballparks.service';
import BallparksWeatherService from '../ballparks.weather.service';
import DbPediaService from '../dbpedia.service';
import WeatherService from '../weather.service';

module.exports = function RxBaseballServices(config) {
  console.log('CONFIG',config);
  const weatherService = new WeatherService(config);
  return {
    BallparksService,
    BallparksWeatherService: new BallparksWeatherService(config, weatherService),
    WeatherService: weatherService,
    DbPediaService
  };
};