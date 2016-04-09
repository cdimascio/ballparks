import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ballparksActions from '../actions/ballparks.actions';
import Card from '../components/card/card';
import ParkCardFront from '../components/park.card/front';


class Cards extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBallparks();
  }

  render() {
    const { ballparks, isFetching } = this.props.ballparks;
    return isFetching ? <div>loading</div> : (
      <div className="card-container">
        {
          ballparks.map(park =>
            <Card width={350} height={600}
                  front={<ParkCardFront park={park} imageHeight={300} width={350} height={600} />}
                  back={<ParkCardFront park={park} imageHeight={300} width={350} height={600} />}
            ></Card>)
        }
      </div>);
  }
}

function mapStateToProps(state) {
  return {
    ballparks: state.ballparks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBallparks() {
      bindActionCreators(ballparksActions, dispatch).fetchBallparks();
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cards);
