import StadiumsRoutes from './api/controllers/stadiums/routes';
import BallparksWeatherSerice from './api/services/ballparks.weather.service';

export default class Routes {
  static init(app) {
    BallparksWeatherSerice
      .start()
      .subscribe(x => console.log('received park weather update:', x.name),
                 e => console.log('failed to update park weather: ', e));

    app.use('/api/v1/baseball',new StadiumsRoutes().init());

  }
}
