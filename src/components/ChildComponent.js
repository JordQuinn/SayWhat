import React, { Component } from 'react';
import '../styles/index.css';



class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <button type="submit" className="btn" onClick={this.props.onClick}>Submit</button>
        </div>
      </div>
    );
  }
}

export default ChildComponent
