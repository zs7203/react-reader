import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Home from './routes/Home';
import Counter from './routes/Counter';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/counter" exact component={Counter} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
