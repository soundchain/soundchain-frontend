import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cx from './WidgetPlayerTop.scss';

import Prev from './Prev.png';
import Play from './Play.png';
import Next from './Next.png';
import Repeat from './Repeat.png';
import Volume from './Volume.png';
import SongCover from './SongCover.png';
import Like from './Like.png';

export default class WidgetPlayerTop extends Component {

  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    return (
      <div className={cx('player')}>
        <img className={cx('player__controll')} src={Prev}/>
        <img className={cx('player__controll')} src={Play}/>
        <img className={cx('player__controll')} src={Next}/>
        <img className={cx('player__controll')} src={Repeat}/>
        <div className={cx('player__timeline')}>
          <div className={cx('timeline__time')}>
            1:54
          </div>
          <div className={cx('timeline__progress-bar')}>
            <div className={cx('progress-bar__line')} style={{flex: "0.2"}}/>
          </div>
          <div className={cx('timeline__time')}>
            4:12
          </div>
        </div>
        <img className={cx('player__controll')} src={Volume}/>
        <div className={cx('song-info')}>
          <img src={SongCover}/>
          <div className={cx('song-info__name')}>
            <div className={cx('song-info__name__header')}>Now playing</div>
            <div>
              <span className={cx('song-info__name__album')}>Fat Calmed Kiddos</span>
              <span className={cx('song-info__name__song')}> — Hinds</span>
            </div>
          </div>
        </div>
        <img className={cx('player__controll')} src={Like}/>
      </div>
    );
  }
}
