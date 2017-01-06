import React, { Component } from 'react';
import classes from './App.scss'

export default class App extends Component {
  render() {
    return (
      <h1><a href="http://google.com" className={classes.link}>Hello, world.</a></h1>
    );
  }
}
