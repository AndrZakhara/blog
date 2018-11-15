import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './components/header/Header'
import {
  Route,
  Redirect,
} from 'react-router-dom'
// import { push } from 'connected-react-router'
import { routes, protectedRoutes } from './routes'
import { getUser } from './actions/authActions'

class App extends Component {
  constructor(props) {
    super(props);

    this.renderRedirect = this.renderRedirect.bind(this);
  }

  componentDidMount() {
    this.props.handleGetUser('/');
  }

  renderRedirect() {
    if (!this.props.isAuth && this.props.currentPath === '/auth') {
      return null;
    } else if (!this.props.isAuth && this.props.currentPath === '/auth/login') {
      return <Route path="/auth/login" />;
    } else if (!this.props.isAuth && this.props.currentPath === '/auth/signup') {
      return <Route path="/auth/signup" />;
    } else if (!this.props.isAuth) {
      return <Redirect push to="/auth" />;
    }
    else if (this.props.isAuth) {
      return <Redirect to={this.props.nextPath} />;
    }
    else {
      return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <h4>App work</h4>
        {this.renderRedirect()}
        {this.props.isAuth ? protectedRoutes : routes}
      </div>
    );
  }
}

export default connect(
  store => ({
    isAuth: store.authForm.isAuth,
    currentPath: store.router.location.pathname,
    nextPath: store.currentPath.nextPath,
  }),
  dispatch =>({
    handleGetUser: () => dispatch(getUser()),
  }),
)(App);
