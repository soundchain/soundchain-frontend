import React, { Component } from 'react';

import GuideBox from 'components/GuideBox';

import cx from './SidebarRightBox.scss';

export default class SidebarRightBox extends Component {
  render() {
    return (
      <div className={cx('sidebar-right-box')}>
        <GuideBox/>
        <div style={{height: '100px'}}>SidebarRightBox</div>
      </div>
    );
  }
}
