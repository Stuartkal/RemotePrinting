import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Button,Container,Modal, ButtonToolbar} from 'react-bootstrap';
import './App.css';
import Home from './components/Home'
import Upload from './components/Upload'
import Navigationbar from './components/Navigationbar'


class App extends Component {
  render() {
    return (
      <Router>
          <div>
                <Navigationbar/>
                <Route exact path="/" component={Upload}/>      
          </div>
      </Router>
    );
  }
}


export default App;
