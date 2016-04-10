import App from '../../../config';
import ballbarks from '../../../data/ballparks.json'
import BallparksService from '../../services/ballparks.service';
import BallparksWeatherService from '../../services/ballparks.weather.service';
import DBpediaService from '../../services/dbpedia.service';

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

  sparql(req, res) {
    DBpediaService.sparql(req.body)
      .subscribe(::res.json, ::res.send);
  }
}