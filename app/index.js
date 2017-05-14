import React from 'react'
import ReactDOM from 'react-dom'
import getRoutes from './config/routes'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import users from 'redux/modules/users'
import thunk from 'redux-thunk'
import { checkIfAuthed } from 'helpers/auth'

const store = createStore(users, applyMiddleware(thunk))

function checkAuth (nextState, replace) {
  const isAuthed = checkIfAuthed(store)
  const nextPathName = nextState.location.pathname

  if (nextPathName === '/' || nextPathName === '/auth') {
    if (isAuthed === true) {
      replace('/feed')
    }
  } else {
    if (isAuthed === false) {
      replace('/auth')
    }
  }

  // if (nextState.location.pathname === '/feed') {
  //   if (nextState.isAuthed() !== true) {
  //     replace('/')
  //   }
  // }
}

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(checkAuth)}
  </Provider>,
  document.getElementById('app')
)
