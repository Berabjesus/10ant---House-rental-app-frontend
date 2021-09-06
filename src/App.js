import React from 'react';
// import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/home/home'
import Login from './containers/authentication/login';
import Signup from './containers/authentication/signup';

// import View from './containers/view/view';
// import store from './store/store';

const App = () => (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path ="/login" component={Login}/>
        <Route exact path ="/signup" component={Signup}/>
        <Route path="*" component={Error} />
      </Switch>
    </main>
);

export default App;

