import React, { Component } from 'react';
import './styles/index.css';
import BaseLayout from './components/BaseLayout.js';
import ParentComponent from './components/ParentComponent.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <ParentComponent/>
        </BaseLayout>
      </div>
    );
  }
}

export default App;
