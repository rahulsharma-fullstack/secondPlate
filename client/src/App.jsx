import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import About from './pages/About';
import Teams from './pages/Teams';
import Testimonial from './pages/Testimonial';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/about" element={<About />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
