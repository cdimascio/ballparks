import StadiumsController from './controller';
import * as express from 'express';

class StadiumsRoutes {
  constructor() {
    this._router = express.Router();
    this._ec = new StadiumsController();
  }

  init() {
    this._router.get('/test', this._ec.stadiums);
    this._router.get('/ballparks', this._ec.ballparks);
    this._router.get('/ballparks/search', this._ec.search);
    this._router.get('/ballparks/:id', this._ec.ballpark);

    return this._router;
  }
}
export default StadiumsRoutes;