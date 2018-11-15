import React from 'react'
import { Route, Switch,  } from 'react-router-dom'
import MainPage from '../components/routes/MainPage'
import PostPage from '../components/routes/PostPage'
import ProfilePage from '../components/routes/ProfilePage'
import LoginPage from '../components/routes/auth/LoginPage'
import RegisterPage from '../components/routes/auth/RegisterPage'
import AuthPage from '../components/routes/auth/AuthPage'
import ProtectedRoute from '../components/common/ProtectedRoute'


export const routes = (
  <Switch>
    <Route exact path="/auth" component={AuthPage} />
    <Route exact path="/auth/login" component={LoginPage} />
    <Route exact path="/auth/signup" component={RegisterPage} />
    {/*<ProtectedRoute exact path="/" component={MainPage} />*/}
    {/*<ProtectedRoute path="/post" component={PostPage} />*/}
    {/*<ProtectedRoute path="/profile" component={ProfilePage} />*/}
  </Switch>
);

export const protectedRoutes = (
  <Switch>
    {/*<Route exact path="/auth" component={AuthPage} />*/}
    {/*<Route exact path="/auth/login" component={LoginPage} />*/}
    {/*<Route exact path="/auth/signup" component={RegisterPage} />*/}
    <ProtectedRoute exact path="/" component={MainPage} />
    <ProtectedRoute path="/post" component={PostPage} />
    <ProtectedRoute path="/profile" component={ProfilePage} />
  </Switch>
);
