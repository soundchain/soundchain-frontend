import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GuideBox from 'components/GuideBox';

import cx from './PlayerSidebarRight.scss';

export default class PlayerSidebarRight extends Component {

  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    return (
      <div>
        <GuideBox/>
        <div style={{height: '100px'}}>SidebarRightBox</div>
      </div>
    );
  }
}