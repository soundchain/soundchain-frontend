import React from 'react';

import Header1 from './Header1.svg';
import Header2 from './Header2.svg';

import cx from './GuideBox.scss';

export default function GuideBox(props) {
  return (
    <div className={cx('guide-box')}>
      <div className={cx('guide-box__header')}>
        <h2>Hello, bro!</h2>
        Welcome to next-generation music service provider powered by blockchain
      </div>
      <div className={cx('guide-box__section')}>
        <div className={cx('section__header')}>
          <img src={Header1}/> For Musicians and Artists
        </div>
        <div className={cx('section__content')}>
          <div className={cx('tabs')}>
            <div className={cx('tab', 'tab--active')}>
              Features
            </div>
            <div className={cx('tab')}>
              Royalties
            </div>
          </div>
          <div className={cx('step')}>
            <div className={cx('step__checkbox')}/>
            <div className={cx('step__text')}>
              <div className={cx('step__text--header')}>
                UPLOAD TRACK & GET INVITE
              </div>
              Upload your release''s demo to the decentralized net and get an invitation for DAL creation from the community
            </div>
          </div>
        </div>
      </div>
      <div className={cx('guide-box__section')}>
        <div className={cx('section__header')}>
          <img src={Header2}/> For Listener and Reposters
        </div>
        <div className={cx('section__content')}>
          <div className={cx('step')}>
            <div className={cx('step__checkbox')}/>
            <div className={cx('step__text')}>
              <div className={cx('step__text--header')}>
                ENJOY FREE MUSIC
              </div>
              That is what you are here for, right? To listen to music of your favorite artists. They are paid each time you do.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
