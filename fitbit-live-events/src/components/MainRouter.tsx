import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import Register from "./Register";
import Login from "./Login";
import CurrentEvents from "./CurrentEvents";
import PastEvents from "./PastEvents";
import FutureEvents from './FutureEvents';
import EventLayout from "./EventLayout";
import DashboardPage from './../pages/DashboardPage'
import PostsPage from './../pages/PostsPage'
import Account from './Account'
import MyPastEvents from './MyPastEvents'
import MyFutureEvents from './MyFutureEvents'
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import CreateNewEvent from './CreateNewEvent';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('user') != null
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

const MainRouter = () => {
  return(
    <Switch>
      <Route exact path='/'>
        <Homepage/>
      </Route>
      <Route exact path='/login'>
        <Login/>
      </Route>
      <Route exact path='/register'>
        <Register/>
      </Route>
      <Route exact path='/past_events' component={PastEvents} />
      <Route exact path='/current_events' component={CurrentEvents} />
      <Route exact path='/future_events' component={FutureEvents} />
      <Route exact path='/event' component={EventLayout}/>
      <PrivateRoute exact path='/account' component={Account} />
      <PrivateRoute exact path='/my_past_events' component={MyPastEvents} />
      <PrivateRoute exact path='/my_future_events' component={MyFutureEvents} />
      <PrivateRoute exact path='/create_new_event' component={CreateNewEvent} />
      <PrivateRoute exact path="/example" component={DashboardPage} />
      <Route exact path="/example/posts" component={PostsPage} />
    </Switch>
  );
};

export default MainRouter;