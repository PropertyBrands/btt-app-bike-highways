import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { store } from './state/store';

import { Profile, Activities } from './components'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router>
          <div>
            <header>
              <Link to="/">Home</Link>
              <Link to="/activities">My Activities</Link>
              <Link to="/my-profile">My Profile</Link>
            </header>
            <div style={{marginTop: '1.5em'}}>
              <Route path="/my-profile" component={Profile} />
              <Route path="/activities" component={Activities}/>
            </div>
          </div>
      </Router>
    </div>
  </Provider>,
  document.getElementById('app')
);