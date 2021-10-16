import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trackers" component={About} />
        <Route exact path='/contact-us' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
