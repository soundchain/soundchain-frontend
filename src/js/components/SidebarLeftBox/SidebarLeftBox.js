import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cx from './SidebarLeftBox.scss';

export default class SidebarLeftBox extends Component {

  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const { children } = this.props;

    return (
      <div>{children}</div>
    );
  }
}
