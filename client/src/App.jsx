import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/about" component={About} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
