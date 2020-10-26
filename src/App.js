import React from 'react'
import {AuthProvider} from './auth'
import Profile from './Profile'
import Login from './Login'
import {Route, Switch} from 'react-router-dom'
import {Provider} from "react-redux";
import store from "./store";
import {ConnectedRouter} from "connected-react-router";
import history from "./history";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AuthProvider loginRedirectTo={'/login'} homeRedirectTo={'/'}>
          <Switch>
            <Route path="/" exact component={Profile}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </AuthProvider>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
