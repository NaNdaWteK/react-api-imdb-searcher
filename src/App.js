import React, {StrictMode, Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import {Detail}from './pages/Detail';
import {Home}from './pages/Home';
import {NotFound}from './pages/NotFound';

import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      searched: false
    };
  }

  render() {
    return (
      <StrictMode>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/detail/:id" component={Detail} />
              <Route component={NotFound} />
            </Switch>
          </header>
        </div>
      </StrictMode>
    );
  }
}
export default App;
