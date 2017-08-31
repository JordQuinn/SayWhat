import React, { Component } from 'react';
import '../styles/index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default BaseLayout
