import StadiumsRoutes from './api/controllers/stadiums/routes';
import BallparksWeatherSerice from './api/services/ballparks.weather.service';

export default class Routes {
  static init(app) {
    BallparksWeatherSerice
      .start()
      .subscribe(x => console.log('received park weather update:', x.name));
    app.use('/api/v1/baseball',new StadiumsRoutes().init());
  }
}
