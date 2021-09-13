import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/home/home'
import Login from './containers/authentication/login';
import Role from './containers/authentication/role';
import OwnerSignUp from './containers/authentication/ownerSignup';
import TenantSignUp from './containers/authentication/tenantSignup';
import Index from './containers/accommodation'
import View from './containers/accommodation/view';
import Post from './containers/accommodation/post';
import Error from './components/common/error'
import store from './store/store';

const App = () => (
  <Provider store={store}>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path ="/login" component={Login}/>
        <Route exact path ="/signup" component={Role}/>
        <Route exact path ="/signup/owner" component={OwnerSignUp}/>
        <Route exact path ="/signup/tenant" component={TenantSignUp}/>
        <Route exact path ="/user/:id" component={Index}/>
        <Route exact path ="/view/:id" component={View}/>
        <Route exact path ="/post/:id" component={Post}/>
        <Route path="*" component={Error} />
      </Switch>
    </main>
  </Provider>
);

export default App;

