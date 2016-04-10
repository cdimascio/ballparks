import React, { Component } from 'react';
import './tabs.css';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.props.children.forEach((tab, i) => {
      if (tab.props.selected) {
        this.state = {
          selectedIndex: i
        };
      }
    });
  }

  componentWillReceiveProps(props) {
    console.log('component will recipe', props);
    this.setState({
      selectedIndex: props.children.filter(tab => tab.props.selected)[0]
    });
  }

  render() {
    // TODO ensure children are all tab objects
    const selectedIndex = this.state.selectedIndex;
    return (
      <div>
        <div className="tabs-container">
          {
            this.props.children.map(tab => (
              <div key={tab.props.title} className={`tabs-button ${tab === this.props.children[selectedIndex] ? ' active' : ''}`} onClick={e => this.handleClick(e,tab)}>
                <h4>{tab.props.title}</h4>
              </div>
            ))
          }
        </div>
        <div>
          { this.props.children[selectedIndex] }
        </div>
      </div>
    );
  }

  handleClick(e, tab) {
    this.props.children.forEach((cTab,index) => {
      if (cTab == tab) {
        this.setState({
          selectedIndex: index
        });
      }
    });
    e.stopPropagation();
  }
}

export default Tabs;