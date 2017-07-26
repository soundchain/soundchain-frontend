import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import cx from './PlayerSidebarLeft.scss';

import top50Img from './img/top50.svg';

const menu = [
  {
    name: "Stream",
    img: top50Img,
    url: "/player/stream",
    submenu: [
      {name: "Friends", url: "/friends"},
      {name: "Channels", url: "/channels"},
      {name: "Demos", url: "/demos"}
    ]
  },
  { name: "Top 50", img: top50Img, url: "/player/stream/top50" },
  { name: "New charts", img: top50Img, url: "/player/new" },
  { name: "Favourites", img: top50Img, url: "/player/favourites" },
  { name: "Following", img: top50Img, url: "/player/following" },
];

export default class PlayerSidebarLeft extends Component {

  static propTypes = {
  };

  static defaultProps = {
  };

  renderSubMenu(menu) {
    return (
      <div className={cx('link__sublinks')}>
        {menu.map((item) =>
          <NavLink
            key={item.name}
            className={cx('sublink')}
            activeClassName={cx('sublink--active')}
            to={item.url}
          >
            {item.name}
          </NavLink>
        )}
      </div>
    );
  }

  render() {
    const { children } = this.props;
    return (
      <div className={cx('sidebar-left')}>
        {menu.map((item) =>
          <div key={item.name}>
            <NavLink
              className={cx('sidebar-left__link')}
              activeClassName={cx('sidebar-left__link--active')}
              to={item.url}
            >
              <div className={cx('link__image')}>
                <img src={item.img}/>
              </div>
              <div className={cx('link__name')}>
                {item.name}
              </div>
            </NavLink>

            {item.submenu && this.renderSubMenu(item.submenu)}
          </div>
        )}
      </div>
    );
  }
}