import React, { Component } from 'react'
import { connect } from 'react-redux'


class ProfilePage extends Component {
  componentDidMount() {
    this.props.handleGetUser('/profile');
  }
  render() {
    // const {} = this.props;

    return(
      <div>
        ProfilePage
      </div>
    );
  }
}

export default connect(
  store => ({}),
  dispatch =>({

  }),
)(ProfilePage);