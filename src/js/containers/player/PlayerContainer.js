import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

import { PlayerSidebarLeft, PlayerSidebarRight } from 'components/player';

import SidebarLeftBox from 'components/SidebarLeftBox';
import SidebarRightBox from 'components/SidebarRightBox';
import ContentBox from 'components/ContentBox';

import PlayerStream from './PlayerStream';

import cx from './PlayerContainer.scss';

@withRouter
@connect()
export default class PlayerContainer extends Component {

  static propTypes = {
  }

  render() {
    return (
      <div className={cx('player-container')}>

        <SidebarLeftBox>
          <PlayerSidebarLeft/>
        </SidebarLeftBox>

        <ContentBox>
          <Switch>
            <Route path="/player/stream" component={PlayerStream}/>
            <Redirect from='/player' to='/player/stream'/>
          </Switch>
        </ContentBox>

        <SidebarRightBox>
          <PlayerSidebarRight/>
        </SidebarRightBox>

      </div>
    );
  }
}
