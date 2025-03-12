import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import About from './pages/About';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/restaurants" component={Restaurants} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default Routes;
