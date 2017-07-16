import React, { Component } from 'react';
import cx from './NavigationLeft.scss';

export default class NavigationLeft extends Component {
  render() {
    return (
      <div className={cx('navigation-left')}>
        <div className={cx('navigation-left_item')}>Player</div>
        <div className={cx('navigation-left_item')}>Wallet</div>
        <div className={cx('navigation-left_item')}>DAL</div>
        <div className={cx('navigation-left_item')}>ICO</div>
        <div className={cx('navigation-left_item')}>Trading</div>
        <div className={cx('navigation-left_item')}>Market</div>
      </div>
    );
  }
}
