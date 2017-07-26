import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

import { StreamItem, WidgetStreamItemInfo } from 'soundchain-ui-toolkit';

import Cover from './Cover.png';
import PlayButton from './Play Button.png';

import cx from './WidgetStreamPlaylist.scss';

export default class WidgetStreamPlaylist extends Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  handleUpdate = (values) => {
        const { shadowTop, shadowBottom } = this.refs;
        const { scrollTop, scrollHeight, clientHeight } = values;
        const shadowTopOpacity = 1 / 80 * Math.min(scrollTop, 80);
        const bottomScrollTop = scrollHeight - clientHeight;
        const shadowBottomOpacity = 1 / 80 * (bottomScrollTop - Math.max(scrollTop, bottomScrollTop - 80));
        shadowTop.style.opacity = shadowTopOpacity;
        shadowBottom.style.opacity = shadowBottomOpacity;
    }

  render() {
    const songs = [
      {name: 'Put Your Number in my Phone', author: 'Ariel Pink', time: '2:34'},
      {name: 'Put Your Number in my Phone', author: 'Ariel Pink', time: '2:34'},
      {name: 'Put Your Number in my Phone', author: 'Ariel Pink', time: '2:34'},
      {name: 'Put Your Number in my Phone', author: 'Ariel Pink', time: '2:34'},
      {name: 'Put Your Number in my Phone', author: 'Ariel Pink', time: '2:34'},
      {name: 'Put Your Number in my Phone', author: 'Ariel Pink', time: '2:34'},
      {name: 'Put Your Number in my Phone', author: 'Ariel Pink', time: '2:34'},
      {name: 'Put Your Number in my Phone', author: 'Ariel Pink', time: '2:34'},
      {name: 'Put Your Number in my Phone', author: 'Ariel Pink', time: '2:34'},
      {name: 'Put Your Number in my Phone', author: 'Ariel Pink', time: '2:34'},
      {name: 'Put Your Number in my Phone', author: 'Ariel Pink', time: '2:34'}
    ];
    return (
      <StreamItem
        info={{
          url: '/',
          ownerName: 'asdf',
          action: 'playlist',
          date: new Date(),
          imgSrc: '',
        }}
        coverImage={Cover}
        coverImageWidth={'420px'}
        coverImageHeight={'240px'}
        coverOverlay={
          <div className={cx('overlay-content')}>
            <div className={cx('overlay-content__info')}>
              <img src={PlayButton}/>
              <div className={cx('info__name')}>
                New Heroes<br/>
                of Oldschool Sound
              </div>
              <div className={cx('info__subtitle')}>
                22 Songs 1h 47min
              </div>
            </div>
            <div className={cx('overlay-content__actions')}>
              126
              23
            </div>
          </div>
        }
      >
        <div className={cx('item-content')}>
          <div className={cx('item-content__playlist')}>
            <div
              className={cx('playlist__shadow-top')}
              ref='shadowTop'
            />
            <div
              className={cx('playlist__shadow-bottom')}
              ref='shadowBottom'
            />
            <Scrollbars onUpdate={this.handleUpdate}>
              {songs.map((it, ind) =>
                <div className={cx('playlist__song')}>
                  <div className={cx('song__index')}>
                    {ind}
                  </div>
                  <div className={cx('song__info')}>
                    <span className={cx('song__name')}>
                      {it.name}
                    </span>
                    <span className={cx('song__author')}>
                      — {it.author}
                    </span>
                  </div>
                  <div className={cx('song__time')}>
                    {it.time}
                  </div>
                </div>
              )}
            </Scrollbars>
          </div>
          <div className={cx('item-content__player')}>
            Player
          </div>
        </div>
      </StreamItem>
    );
  }
}
