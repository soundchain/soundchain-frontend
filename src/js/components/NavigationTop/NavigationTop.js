import React, { Component } from 'react';
import cx from './NavigationTop.scss';

import logo from 'img/logo.svg';

export default class NavigationTop extends Component {
  render() {
    return (
      <div className={cx('navigation-top')}>
        <span className={cx('navigation-top__logo__container')}>
          <img src={logo}/>
        </span>
      </div>
    );
  }
}
