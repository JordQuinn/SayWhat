import React, { Component } from 'react';
import '../styles/index.css';


class DisplayComponent extends Component {
  render() {
    return (
      <div className ="said">{this.props.sayWhat}</div>
    );
  }
}

export default DisplayComponent
