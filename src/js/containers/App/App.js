import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Route, NavLink, withRouter } from 'react-router-dom';

import { LeftNav, TopNav } from '~/components/navigation';

@withRouter
export default class App extends Component {
  render() {
    return (
      <div>
        <TopNav/>
        <LeftNav/>
      </div>
    );
  }
}
