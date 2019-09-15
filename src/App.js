import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import { HomePage } from './pages/homepage/homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
