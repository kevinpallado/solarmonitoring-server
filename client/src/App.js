import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch} from 'react-router';
// import {Route, HashRouter as Router} from 'react-router-dom';

//routes
import HomeRoute from './routes/home.route';
export default class App extends Component {
  render() {
    return (
      <HomeRoute />
    )
  }
}
