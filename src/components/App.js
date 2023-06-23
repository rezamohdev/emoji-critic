import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
import Header from './Header';
import './App.css';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="App">
      <Header />
      <switch>
        <Route exact path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </switch>
    </div>
  );
}

export default App;
