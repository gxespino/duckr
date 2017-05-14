import React, { Component, PropTypes } from 'react'
import { Navigation } from 'components'
import { connect } from 'react-redux'
import { container, innerContainer } from './styles.css'

class MainContainer extends Component {
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed} />
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}

function mapStateToProps (state) {
  console.log('STATE', state)

  return {
    isAuthed: state.isAuthed,
  }
}

export default connect(
  mapStateToProps
)(MainContainer);
