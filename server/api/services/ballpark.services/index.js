import Config from '../../../config';
// import RxBaseballServices from 'rx-ballpark-services';
// Bringing in code locally for the convenience of this example
import RxBaseballServices from './rx-ballparks-services';

const rbs = RxBaseballServices({
  weather: {
    apiRoot: Config.getConf().weatherApiRoot,
    useMockData: true
  }
});

const BaseballServices = {
  BallparksService: rbs.BallparksService,
  BallparksWeatherService: rbs.BallparksWeatherService,
  WeatherService: rbs.WeatherService,
  DbPediaService: rbs.WeatherService
};

export default BaseballServices;
