import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { WidgetStreamItemInfo } from 'soundchain-ui-toolkit';
import cx from './WidgetStreamItem.scss';

export default class WidgetStreamItem extends Component {

  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    return (
      <div className={cx('stream-item')}>
        <div className={cx('stream-item__header')}>
          <WidgetStreamItemInfo {...this.props.info}/>
          {this.props.header}
        </div>
        <div className={cx('stream-item__content')}>
          <div className={cx('content__cover')}>
            <img
              className={cx('cover__image')}
              src={this.props.coverImage}
              height="100%"
            />
            <div className={cx('cover__overlay')}>
              {this.props.coverOverlay}
            </div>
          </div>
          {/*TODO Better name for \/ className*/}
          <div className={cx('content')}>
            {this.props.children}
          </div>
        </div>
        <div className={cx('stream-item__footer')}>
          {this.props.footer}
        </div>
      </div>
    );
  }
}
