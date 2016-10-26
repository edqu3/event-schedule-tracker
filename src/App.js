import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Button bsStyle="success" bsSize="xs" onClick={this.hello}>BUTTON1</Button>
        <Button bsStyle="warning" bsSize="sm" onClick={this.hello}>BUTTON2</Button>
        <Button bsStyle="danger" bsSize="lg" onClick={this.hello}>BUTTON3</Button>
      </div>
    );
  }

  hello(){
    console.log('hello wo33rld')
  }

}

export default App;
