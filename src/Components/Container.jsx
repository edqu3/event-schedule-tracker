import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap'

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
      </PageHeader>
    );
  }
}

export default Container;