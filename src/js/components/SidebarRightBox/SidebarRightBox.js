import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cx from './SidebarRightBox.scss';

export default class SidebarRightBox extends Component {

  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const { children } = this.props;
    return (
      <div className={cx('sidebar-right-box')}>
        {children}
      </div>
    );
  }
}
