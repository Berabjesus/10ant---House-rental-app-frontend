import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Signup from './containers/session/signup';
import Login from './containers/session/login';
import Home from './containers/home/home';
import View from './containers/view/view';
import store from './store/store';

const App = () => (
  <Provider store={store}>
    <div className="col-md-9 mx-auto px-2 pt-5 wrapper">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home/:id" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/view/:user/:id" component={View} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  </Provider>
);

export default App;

