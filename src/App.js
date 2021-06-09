import React, {Component} from 'react';
import './App.css';
import Home from './Components/Home';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      user : Ray
    };
  }
  render(){
    return <Home/>
  }
}

export default App;
