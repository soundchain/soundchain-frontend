import React, { Component } from 'react';
import cx from './NavigationLeft.scss';

import { NavLink } from 'react-router-dom';

import PlayerImage from './img/Player.svg';
import WalletImage from './img/Wallet.svg';
import DALImage from './img/DAL.svg';
import ICOImage from './img/ICO.svg';
import TraingImage from './img/Trading.svg';
import MarketImage from './img/Market.svg';

//TODO This should use svg in future, and color them
export default class NavigationLeft extends Component {
  render() {
    const links = [
      {name: "Player", img: PlayerImage, url: "/player/stream"},
      {name: "Wallet", img: WalletImage, url: "/wallet"},
      {name: "DAL", img: DALImage, url: "/DAL"},
      {name: "ICO", img: ICOImage, url: "/ICO"},
      {name: "Trading", img: TraingImage, url: "/trade"},
      {name: "Market", img: MarketImage, url: "/market"},
    ];

    return (
      <div className={cx('navigation-left')}>
        {links.map(({name, img, url}) =>
          <NavLink
            key={name}
            className={cx('navigation-left__link')}
            activeClassName={cx('navigation-left__link--active')}
            to={url}
          >
            <div className={cx('link__image')}>
              <object data={img} type="image/svg+xml"/>
            </div>
            <div className={cx('link__name')}>
              {name}
            </div>
          </NavLink>
        )}
      </div>
    );
  }
}
