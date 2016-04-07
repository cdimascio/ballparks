import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flip: false
    };
  }

  render() {
    const { front, back } = this.props;
    return (
      <div className="card scene3D">
        <div className={this.state.flip ? 'flip rotate' : 'flip'} onClick={this.handleClick.bind(this)}>
          <section card="">
            {back}
          </section>
          <section card="">
            {front}
          </section>
        </div>
      </div>
    );
  }

  handleClick(e) {
    this.setState({
      flip: !this.state.flip
    });
  }
}

export default Card;