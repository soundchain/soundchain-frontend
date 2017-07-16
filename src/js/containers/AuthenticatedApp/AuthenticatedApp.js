import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

import NavigationTop from '~/components/NavigationTop';
import NavigationLeft from '~/components/NavigationLeft';
import PlayerTopBox from '~/components/PlayerTopBox';
import PlayerContainer from '~/containers/player';

import cx from './AuthenticatedApp.scss';

@withRouter
export default class AuthenticatedApp extends Component {

  render() {
    return (
      <div className={cx('app')}>

        <NavigationTop />
        <div className={cx('main')}>

          <NavigationLeft />
          <div className={cx('content')}>

            <PlayerTopBox/>

            <Switch>
              <Route path='/player' component={PlayerContainer}/>
              <Redirect from='/' to='/player'/>
            </Switch>
          </div>

        </div>
      </div>
    );
  }
}
