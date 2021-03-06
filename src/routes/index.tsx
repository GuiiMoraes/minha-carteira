import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Income from '../pages/Income';
import Outcome from '../pages/Outcome';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/income" component={Income} isPrivate />
    <Route path="/outcome" component={Outcome} isPrivate />
  </Switch>
);

export default Routes;
