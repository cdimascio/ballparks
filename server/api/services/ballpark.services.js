import Config from '../../config';
import RxBaseballServices from 'rx-ballpark-services';

const rbs = RxBaseballServices({
  weather: {
    apiRoot: Config.getConf().weatherApiRoot,
    useMockData: false
  }
});

const BaseballServices = {
  BallparksService: rbs.BallparksService,
  BallparksWeatherService: rbs.BallparksWeatherService,
  WeatherService: rbs.WeatherService,
  DbPediaService: rbs.WeatherService
};

export default BaseballServices;

