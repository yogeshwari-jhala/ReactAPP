import React, {Component} from 'react';
import './App.css';
import firebase from './Components/Firebase';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Welcome from './Components/Welcome';
import Navigation from './Components/Navigation';
import Login from './Components/Login';
import Meetings from './Components/Meetings';
import Register from './Components/Register';


class App extends Component{
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount(){
    const ref = firebase.database().ref('user');

    ref.on('value', snapshot => {
      let FBUser = snapshot.val();
      this.setState({ user: FBUser });
    });
  }
  render(){
    return (
      <div>
        <BrowserRouter>
        <Navigation user={this.state.user} />
        {this.state.user && <Welcome user={this.state.user} />}
        <Switch>
        
          <Route path="/" exact user={this.state.user} component={Home}/>  
          <Route path="/login" user={this.state.user} component={Login}/> 
          <Route path="/meetings" user={this.state.user} component={Meetings}/>
          <Route path="/register" user={this.state.user} component={Register}/>
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
