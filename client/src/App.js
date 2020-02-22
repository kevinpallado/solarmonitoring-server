import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//routes
import HomeRoute from './routes/home.route';
export default class App extends Component {
  render() {
    return (
      <HomeRoute />
    )
  }
}
