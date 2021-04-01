import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'; 
import CreateRoomPage from './CreateRoomPage';
import RoomJoin from './RoomJoin'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Router>
      <Switch>
        <Route path='/'>Welcome to La Playa!</Route>
        <Route path='/join' component={ RoomJoin } />
        <Route path='/create' component={ CreateRoomPage } />
      </Switch>
    </Router>
    )
  }

}