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
    const style = { width: this.props.width, height: this.props.height };
    return (
      <div className="card scene3D" style={style}>
        <div className={this.state.flip ? 'flip rotate' : 'flip'} onClick={this.handleClick.bind(this)} style={style}>
          <section card="" style={style}>
            {back}
          </section>
          <section card="" style={style}>
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