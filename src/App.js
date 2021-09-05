import React from 'react';
// import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
// import Signup from './containers/session/signup';
import Home from './containers/home/home'
import login from './containers/authentication/login';
// import View from './containers/view/view';
// import store from './store/store';

const App = () => (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path ="/login" component={login}/>
        <Route path="*" component={Error} />
      </Switch>
    </main>
);

export default App;

