import Rx from 'rx';
import rp from 'request-promise';

class DBpediaService {
  search({
    query,
    qclass,
    limit
    }) {
    const qs = {
      QueryClass: qclass || 'stadium',
      QueryString: query,
      format: 'json',
      MaxHits: limit || 5
    };
    //http://lookup.dbpedia.org/api/search.asmx/KeywordSearch?QueryClass=stadium&QueryString=CHICAGO&MaxHits=5
    return Rx.Observable.fromPromise(rp({
      method: 'GET',
      uri: 'http://lookup.dbpedia.org/api/search.asmx/KeywordSearch',
      qs,
      json: true
    }));
  }
}

export default new DBpediaService();