import React, {Component} from 'react';
import {PageHeader, Button} from 'react-bootstrap'

class Container extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="container-bg">
        <Header />
        <main>
          <p>SOME CONTENT</p>
          <p>SOME CONTENT</p>
          <p>SOME CONTENT</p>
        </main>
      </div>
    );

  }

}

class Header extends Component {
  constructor() {
    super();
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    const today = mm + '/' + dd + '/' + yyyy;

    this.state = {
      data: today
    };

  }

  render() {
    return (
      <PageHeader>Event,
        <small>Next Event @ {this.state.data}</small>
        <Button bsStyle="primary" >Butt on</Button>
        <Button bsStyle="success" >Butt on</Button>
        <Button bsStyle="info" >Butt on</Button>
        <Button bsStyle="warning" >Butt on</Button>
        <Button bsStyle="danger" >Butt on</Button>
        <Button bsStyle="link" >Butt on</Button>
      </PageHeader>
    );
  }
}

export default Container;