import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { WidgetStreamItem, WidgetStreamItemInfo } from 'soundchain-ui-toolkit';

import BuyLicenses from './BuyLicenses.png';
import ICOStarted from './ICOStarted.png';
import Cover from './Cover2.png';
import Userpic from './Userpic.png';

import Smtg1 from './Smtg1.png';
import Smtg2 from './Smtg2.png';

import Share from './Share.png';
import More from './More.png';

import cx from './WidgetStreamTrack.scss';

export default class WidgetStreamTrack extends Component {

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
          action: 'upload',
          date: new Date(),
          imgSrc: Userpic,
        }}
        header={
          <div className={cx('stream-track__header')}>
            <div className={cx('ICO-status')}>
              ICO Started <img src={ICOStarted}/>
            </div>
            <div className={cx('buy-license')}>
              <span className={cx('buy-license__price')}>
                $349
              </span>
              <span className={cx('buy-license__text')}>
                Buy licenses <img src={BuyLicenses}/>
              </span>
            </div>
          </div>
        }
        coverImage={Cover}
        coverOverlay={
          <div>Overlay!</div>
        }
        footer={
          <div className={cx('stream-track__footer')}>
            <div className={cx('footer__left')}>
              <span className={cx('footer__item')}>
                <img className={cx('footer__item__image')} src={Smtg1}/>
                100K
              </span>
              <span className={cx('footer__item')}>
                <img className={cx('footer__item__image')} src={Smtg2}/>
                $0.0554
              </span>
            </div>
            <div className={cx('footer__right')}>
              <span className={cx('footer__item', 'footer__repost')}>
                Repost
              </span>
              <span className={cx('footer__item')}>
                <img className={cx('footer__item__image')} src={Smtg2}/>
                126
              </span>
              <span className={cx('footer__item')}>
                <img className={cx('footer__item__image')} src={Smtg2}/>
                23
              </span>
              <span className={cx('footer__item')}>
                <img className={cx('footer__item__image')} src={Smtg2}/>
                34
              </span>
            </div>
          </div>
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
              <img className={cx('share-button__image')} src={Share}/>
              Share
            </div>
            <div className={cx('song-type')}>
              Soundtrack
            </div>
            <img src={More}/>
          </div>
        </div>
        <div className={cx('item-content__overlay')}>
          Overlay
        </div>
      </WidgetStreamItem>
    );
  }
}
