import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import Register from "./Register";
import Login from "./Login";

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
    </Switch>
  );
};

export default MainRouter;