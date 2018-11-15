import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnregisterUser from './UnRegisterUser';
import RegisterUser from './RegisterUser';

class Header extends Component {

  render() {
    const {
      isAuth,
      username
    } = this.props;

    return (
      <div>
        <h2>Social App</h2>
        <br />
        {!isAuth ? <UnregisterUser /> : <RegisterUser username={username}/>}
        <hr />
      </div>
    );
  }
}

Header.propTypes = {

};

export default connect(
  store => ({
    username: store.authForm.userName.login,
    isAuth: store.authForm.isAuth,
  }),
)(Header);
