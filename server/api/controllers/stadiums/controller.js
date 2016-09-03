import BaseballServices from '../../services/ballpark.services';

export default class Stadiums {
  constructor() {}

  ballparks(req, res) {
    BaseballServices.BallparksWeatherService
      .all()
      .subscribe(r => res.json(r), e => res.send(e));
  }

  ballpark(req, res) {
    BaseballServices.BallparksService
      .byId(req.params.id)
      .subscribe(::res.json, ::res.send);
  }

  search(req, res) {
    BaseballServices.DBpediaService.search({
      query: req.query.q,
      qclass: req.query.qclass,
      limit: req.query.limit
    })
    .subscribe(::res.json, ::res.send);
  }

  sparql(req, res) {
    BaseballServices.DBpediaService.sparql(req.body)
      .subscribe(::res.json, ::res.send);
  }
}