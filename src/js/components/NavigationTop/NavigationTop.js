import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import cx from './NavigationTop.scss';

import logo from 'img/logo.svg';
import DAL from './DAL.png';
import Notification from './Notification.png';
import Userpic from './Userpic.png';
import Search from './Search.png';
import Arrow from './Arrow.png';

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
          <object data={logo} type="image/svg+xml"/>
        </span>
        <span className={cx('navigation-top__search')}>
          <img src={Search}/>
          <input placeholder="Type to search..."/>
        </span>
        {menu.map(({url, name, sub}, ind) =>
          <NavLink
            className={cx('navigation-top__item')}
            activeClassName={cx('navigation-top__item--active')}
            to={url}
          >
            {name}
            {sub &&
              <img
                src={Arrow}
                onClick={this.toggleSubMenu.bind(null, ind)}
              />
            }
          </NavLink>
        )}
        <span className={cx('navigation-top__right')}>
          <img src={DAL}/>
          <img src={Notification}/>
          <div className={cx('user-profile')}>
            <img src={Userpic}/>
            <span>$2, 866</span>
            <img className={cx('user-profile__open')} src={Arrow} onClick={this.toggleProfile}/>
            {this.state.profileOpen && "..."}
          </div>
        </span>
      </div>
    );
  }
}
