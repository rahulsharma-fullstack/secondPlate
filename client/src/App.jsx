import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
