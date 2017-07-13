import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';

import App from '~/containers/App';
import Login from '~/containers/Login';

@withRouter
@connect()
export default class Main extends Component {

  static propTypes = {
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/login" render={() => (
              !this.props.isLogged ?
                <Redirect to="/" /> : <Login />
            )}
          />
          <Route path="/" render={() => (
              !this.props.isLogged ?
                <App /> : <Redirect to="/login" />
            )}
          />
        </Switch>
      </div>
    );
  }
}
