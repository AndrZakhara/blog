import React, { Component } from 'react';
import { connect } from 'react-redux'
class PostPage extends Component {

  render() {
    // const {} = this.props;

    return(
      <div>
        postPage
      </div>
    );
  }
}

export default connect(
  store => ({}),
  dispatch =>({}),
)(PostPage);