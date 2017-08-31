import React, { Component } from 'react';
import '../styles/index.css';
import ChildComponent from '../components/ChildComponent';
import DisplayComponent from './DisplayComponent';

class ParentComponent extends Component {
  constructor(props){
    super(props);
    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
//using the .bind because of the code that has already been given
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    const whatToSay = e.target.value
    this.setState({whatToSay: whatToSay});
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: " "});

  }
  render() {
    return (

        <div className = "inputBox">
          <form action onSubmit={this.handleSubmit}>
            <div className = "inner">
              <input id = "form" onChange={this.handleInput} value = {this.state.whatToSay} type="text" placeholder="Say It" />
            </div>

          <ChildComponent onClick={this.handleSubmit}/>
          </form>
          <DisplayComponent sayWhat={this.state.whatWasSaid}/>
        </div>

    );
  }
}
export default ParentComponent
