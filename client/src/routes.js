import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import About from './pages/About';
import Teams from './pages/Teams';
import Testimonial from './pages/Testimonial';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/restaurants" component={Restaurants} />
      <Route path="/about" component={About} />
      <Route path="/teams" component={Teams} />
      <Route path="/testimonial" component={Testimonial} />
    </Switch>
  );
};

export default Routes;
