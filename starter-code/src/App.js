import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';


import Home from './components/Home'
import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'

const App = () => {
    return (
      <>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
      <div className="App">
        
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/beers' component={Beers}/>
            <Route path='/random-beer' component={RandomBeer}/>
            <Route path='/new-beer' component={NewBeer}/>
          </Switch>
       
      </div>
      </>
    );
  }


export default App;
