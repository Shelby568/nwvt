import React from 'react';
import '../styles/App.css';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact-us" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
