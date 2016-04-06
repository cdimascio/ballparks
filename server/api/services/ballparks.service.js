import Rx from 'rx';
import rp from 'request-promise';
import ballparks from '../../data/ballparks.json';
import DBpediaService from './dbpedia.service';

class BallparksService {
  all() {
    return Rx.Observable.from(ballparks);
  }

  allWithDetails() {
    return this
      .all()
      .concatMap(park => {
        return BallparksService
          ._withDetail(park.name)
          .map(r => {
            return {
              ...park,
              ...r
            };
          });
      });
  }

  byId(id) {
    return this.all()
      .toArray()
      .map(ballparks => ballparks[Number.parseInt(id)-1]);
  }

  static _withDetail(name) {
    //?park foaf:name "${name}"@en ;
    const query = `
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      PREFIX d: <http://dbpedia.org/ontology/>

      SELECT ?name ?thumb ?description ?openingDate WHERE {
              ?park rdfs:label "AT&T Park"@en ;
                    d:thumbnail ?thumb ;
                    d:abstract ?description ;
                    foaf:isPrimaryTopicOf ?name ;
                    d:openingDate ?openingDate .
          FILTER ( lang(?description) = "en")
      }
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
          openingDate: b ? b.openingDate.value : null
        };
      });
  }
}

export default new BallparksService();