import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleLogout } from '../../actions/authActions'
import { setProfilePath } from '../../actions/navigateActions'

class RegisterUser extends Component {

  render() {
    const {
      handleLogout,
      handleClickUser,
      username,
    } = this.props;

    return (
      <div>
        <h4
          onClick={handleClickUser}
        >{username}</h4>
        <NavLink
          to="/auth"
          onClick={handleLogout}
        >
          Log Out
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps =  dispatch => ({
  handleLogout: e => dispatch(handleLogout(e)),
  handleClickUser: () => dispatch(setProfilePath()),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(RegisterUser)