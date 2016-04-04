import Rx from 'rx';
import rp from 'request-promise';
import ballparks from '../../data/ballparks.json'

class BallparksService {
  all() {
    return Rx.Observable.from(ballparks)
  }

  byId(id) {
    return this.all()
      .toArray()
      .map(ballparks => ballparks[Number.parseInt(id)-1]);
  }
}

export default new BallparksService();