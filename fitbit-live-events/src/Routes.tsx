import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Login from './Login'

/**
 * Import all page components here
 */
import App from './App';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
  <Route path="/future_events" component={Login} />
  </Route>
);