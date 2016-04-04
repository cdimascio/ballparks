import App from '../../../config';
import dps from 'dbpedia-sparql-client';
import ballbarks from '../../../data/ballparks.json'
import BallparksService from '../../services/ballparks.service';
import BallparksWeatherService from '../../services/ballparks.weather.service';
import DBpediaService from '../../services/dbpedia.service';
import WeatherService from '../../services/weather.service';

export default class Stadiums {
  stadiums(req, res) {
    var query = 'SELECT DISTINCT ?Concept WHERE {[] a ?Concept} LIMIT 10';
    dps
      .client()
      .query(query)
      .asJson()
      .then(::res.json)
      .catch(::res.send)
  }

  ballparks(req, res) {
    console.log('/ballparks');
    BallparksService
      .all()
      .concatMap(park => DBpediaService
        .search({ query: park.name })
        .flatMap(r => {
          return BallparksWeatherService
            .cache
            .toArray()
            .map(parks => {
              const description = r && r.results && r.results.length > 0 ?
                r.results[0].description : '';
              return {
                ...park,
                description,
                weather: parks[park.id]
              }
            })
        }))
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
      query: req.q,
      qclass: req.query.qclass,
      limit: req.query.limit
    })
    .subscribe(::res.json, ::res.send);
  }
}