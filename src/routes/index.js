import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import CreateTeam from './CreateTeam';

import Home from './Home';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/create-team" exact component={CreateTeam} />
    </Switch>
  </BrowserRouter>
);