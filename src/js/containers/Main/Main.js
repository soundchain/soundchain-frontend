import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';

import AuthenticatedApp from '~/containers/AuthenticatedApp';
import Login from '~/containers/Login';

import cx from './Main.scss';

@withRouter
@connect()
export default class Main extends Component {

  static propTypes = {
  }

  render() {
    return (
      <Switch>
        <Route exact path="/login" render={() => (
            !this.props.isLogged ?
              <Redirect to="/" /> : <Login />
          )}
        />
        <Route path="/" render={() => (
            !this.props.isLogged ?
              <AuthenticatedApp /> : <Redirect to="/login" />
          )}
        />
      </Switch>
    );
  }
}
