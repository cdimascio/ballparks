import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ballparksActions from '../actions/ballparks.actions';
import ParkCards from '../components/park.cards/cards';

class Cards extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBallparks();
  }

  render() {
    return <ParkCards ballparks={this.props.ballparks} />
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
