import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/home/home'
import Login from './containers/authentication/login';
import Role from './containers/authentication/role';
import OwnerSignUp from './containers/authentication/ownerSignup';
import TenantSignUp from './containers/authentication/tenantSignup';
import Index from './containers/accomodation'
import View from './containers/accomodation/view';
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
        <Route exact path ="/:id" component={Index}/>
        <Route exact path ="/view/:id" component={View}/>

        <Route path="*" component={Error} />
      </Switch>
    </main>
  </Provider>
);

export default App;

