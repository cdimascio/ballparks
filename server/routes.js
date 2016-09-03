import StadiumsRoutes from './api/controllers/stadiums/routes';
import BaseballServices from './api/services/ballpark.services';

export default class Routes {
  static init(app) {
    BaseballServices.BallparksWeatherService
      .start()
      .subscribe(x => console.log('received park weather update:', Date.now()),
                 e => console.log('failed to update park weather: ', e));

    app.use('/api/v1/baseball',new StadiumsRoutes().init());
  }
}
