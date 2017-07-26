import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scrollbars from 'react-custom-scrollbars';

import cx from './ContentBox.scss';

export default class ContentBox extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: ''
  };

  render() {
      const { children, className } = this.props;

      return (
        <main className={cx('content-box', className)}>
          <Scrollbars>
            {children}
          </Scrollbars>
        </main>
      );
  }
}
