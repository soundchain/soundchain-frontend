import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { WidgetStreamItem, WidgetStreamItemInfo } from 'soundchain-ui-toolkit';

import Cover from './Cover.png';

import cx from './WidgetStreamPlaylist.scss';

export default class WidgetStreamPlaylist extends Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    return (
      <WidgetStreamItem
        info={{
          url: '/',
          ownerName: 'asdf',
          action: 'playlist',
          date: new Date(),
          imgSrc: '',
        }}
        coverImage={Cover}
        coverOverlay={
          <div>Overlay!</div>
        }
      >
        <div className={cx('item-content')}>
          <div className={cx('song-info')}>
            <span className={cx('song-info__author')}>
              TOBY x DECAP
            </span>
            <span className={cx('song-info__track')}>
            {' '}—{' '}Bitcoin song
            </span>
            <div className={cx('song-info__category')}>
              Radio edit
            </div>
          </div>
          <div className={cx('song-actions')}>
            <div className={cx('share-button')}>
              Share
            </div>
            <div className={cx('song-type')}>
              Soundtrack
            </div>
          </div>
        </div>
        <div className={cx('item-content__overlay')}>
          Overlay
        </div>
      </WidgetStreamItem>
    );
  }
}
