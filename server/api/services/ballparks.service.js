import Rx from 'rx';
import ballparks from '../data/ballparks.json';
import DBpediaService from './dbpedia.service';

const _ballparksCache = [];
class BallparksService {
  all() {
    // TODO cache the Rx way - clear it every day hour
    if (_ballparksCache.length > 0) {
      return Rx.Observable.from(_ballparksCache);
    }
    return Rx.Observable
      .from(ballparks)
      .concatMap(park => {
        return BallparksService
          ._withDetail(park.name)
          .map(r => {
            return {
              ...r,
              ...park
            };
          });
      })
      .do(park => _ballparksCache.push(park));
  }

  byId(id) {
    const $ballparks = _ballparksCache.length > 0 ?
      Rx.Observable.from(_ballparksCache) :
      this.all();

    return $ballparks
      .toArray()
      .map(ballparks => ballparks[Number.parseInt(id) - 1]);
  }

  static _withDetail(name) {
    const query = `
      PREFIX dbpedia2: <http://dbpedia.org/property/>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      PREFIX d: <http://dbpedia.org/ontology/>

      SELECT ?name ?thumb ?comment ?description ?openingDate (group_concat(?link;separator="|") as ?links) WHERE {
        ?park rdfs:label "${name}"@en ;
              d:abstract ?description ;
              rdfs:comment ?comment ;
              foaf:isPrimaryTopicOf ?name .
              OPTIONAL { ?park dbo:wikiPageExternalLink ?link } .
              OPTIONAL { ?park d:thumbnail ?thumb } .
              OPTIONAL { ?park dbpedia2:logoImage ?thumb } .
              OPTIONAL { ?park d:openingDate ?openingDate } .
              OPTIONAL { ?park dbpedia2:opened ?openingDate } .
          FILTER ( lang(?description) = "en")
          FILTER ( lang(?comment) = "en")
      }
    GROUP BY ?name ?thumb ?comment ?description ?openingDate
    `;
    return DBpediaService
      .sparql(query)
      .map(r => {
        const b = r.results.bindings.length > 0 ? r.results.bindings[0] : null;
        if (!b) {
          console.log(`${name} has no results`);
        }
        return {
          wikipediaUrl: b ? b.name.value : null,
          image: {
            thumb: b ? b.thumb.value : null
          },
          description: b ? b.description.value : null,
          comment: b ? b.comment.value : null,
          openingDate: b && b.openingDate ? b.openingDate.value : null,
          links: b && b.links ? b.links.value.split('|') : []
        };
      });
  }
}

export default new BallparksService();