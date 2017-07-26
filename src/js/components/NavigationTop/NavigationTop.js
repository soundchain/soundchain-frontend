import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import cx from './NavigationTop.scss';

import logoImg from 'img/logo.svg';
import dalImg from './dal.png';
import notificationImg from './notification.png';
import userpicImg from './userpic.png';
import searchImg from './search.png';
import arrowImg from './arrow.png';

export default class NavigationTop extends Component {
  state = {
    profileOpen: false,
  }
  toggleProfile = (e) => {
    e.stopPropagation();
    this.setState(state => ({profileOpen: !state.profileOpen}));
  }
  toggleSubMenu = (e) => {
    e.stopPropagation();
    this.setState(state => ({profileOpen: !state.profileOpen}));
  }

  render() {
    const menu = [
      {name: 'Home', url: '/'},
      {name: 'Explorer', url: '/'},
      {name: 'Name that tune', url: '/'},
      {name: 'About', url: '/', sub: []},
    ];
    return (
      <div className={cx('navigation-top')}>

        <span className={cx('navigation-top__logo__container')}>
          <object data={logoImg} type="image/svg+xml"/>
        </span>

        <span className={cx('navigation-top__search')}>
          <img src={searchImg}/>
          <input placeholder="Type to search..."/>
        </span>

        {menu.map(({url, name, sub}, key) =>
          <NavLink
            className={cx('navigation-top__item')}
            activeClassName={cx('navigation-top__item--active')}
            to={url}
            key={key}
          >
            {name}
            {sub &&
              <img src={arrowImg} onClick={this.toggleSubMenu} />
            }
          </NavLink>
        )}

        <span className={cx('navigation-top__right')}>
          <img src={dalImg}/>
          <img src={notificationImg}/>
          <div className={cx('user-profile')}>
            <img src={userpicImg}/>
            <span>$2, 866</span>
            <img className={cx('user-profile__open')} src={arrowImg} onClick={this.toggleProfile}/>
            {this.state.profileOpen && "..."}
          </div>
        </span>
      </div>
    );
  }
}
