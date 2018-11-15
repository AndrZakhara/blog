import React, { Component } from 'react';
import { connect } from 'react-redux'
class MainPage extends Component {

  render() {
    // const {} = this.props;

    return(
      <div>
        MainPage
      </div>
    );
  }
}

export default connect(
  store => ({}),
  dispatch =>({}),
)(MainPage);
