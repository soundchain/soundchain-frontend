import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Route, NavLink, withRouter } from 'react-router-dom'

import ConnectionStatus from '~/components/common/ConnectionStatus';

@withRouter
export default class App extends Component {
  render() {
    return (
      <div>
        <ConnectionStatus />
      </div>
    );
  }
}

