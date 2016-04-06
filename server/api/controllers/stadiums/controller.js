import App from '../../../config';
//import dps from 'dbpedia-sparql-client';
import ballbarks from '../../../data/ballparks.json'
import BallparksService from '../../services/ballparks.service';
import BallparksWeatherService from '../../services/ballparks.weather.service';
import DBpediaService from '../../services/dbpedia.service';
import WeatherService from '../../services/weather.service';

export default class Stadiums {
  constructor() {}

  ballparks(req, res) {
    BallparksWeatherService
      .all()
      .toArray()
      .subscribe(::res.json, ::res.send);
  }

  ballpark(req, res) {
    BallparksService
      .byId(req.params.id)
      //.flatMap(Stadiums._mergeBallparkWithDBpediaAndWeather)
      .subscribe(::res.json, ::res.send);
  }

  search(req, res) {
    DBpediaService.search({
      query: req.query.q,
      qclass: req.query.qclass,
      limit: req.query.limit
    })
    .subscribe(::res.json, ::res.send);
  }
}