import React, { Component } from 'react'
import { Authenticate } from 'components'
import auth from 'helpers/auth'

class AuthenticateContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
    }
  }

  handleAuth = () => {
    this.setState({ isFetching: true })

    auth().then((user) => {
      this.setState({ isFetching: false })
      console.log('Authed user', user)
    })
  }

  render() {
    return (
      <Authenticate
        isFetching={this.state.isFetching}
        error='There was an error processing your request'
        onAuth={this.handleAuth}
      />
    );
  }
}

export default AuthenticateContainer;
