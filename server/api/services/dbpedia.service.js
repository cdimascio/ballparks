import Rx from 'rx';
import rp from 'request-promise';
import dps from 'dbpedia-sparql-client';

class DBpediaService {
  search({
    query,
    qclass,
    limit
    }) {
    const qs = {
      QueryClass: qclass || 'stadium',
      QueryString: query,
      MaxHits: limit || 5
    };
    return Rx.Observable.fromPromise(rp({
      method: 'GET',
      uri: 'http://lookup.dbpedia.org/api/search.asmx/KeywordSearch',
      headers: {
        Accept: 'application/json'
      },
      qs,
      json: true
    }));
  }

  sparql(query) {
    return Rx.Observable.fromPromise(dps
      .client()
      .query(query)
      .asJson());
  }
}

export default new DBpediaService();