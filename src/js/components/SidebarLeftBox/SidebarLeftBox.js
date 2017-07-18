import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import cx from './SidebarLeftBox.scss';
import Top50 from './img/Top50.svg';

export default class SidebarLeftBox extends Component {

  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const { children } = this.props;
    const menu = [
      {
        name: "Stream",
        img: Top50,
        url: "/player/stream",
        sublinks: [
          {name: "Friends", url: "/friends"},
          {name: "Channels", url: "/channels"},
          {name: "Demos", url: "/demos"}
        ]
      },
      { name: "Top 50", img: Top50, url: "/player/stream/top50" },
      { name: "New charts", img: Top50, url: "/player/new" },
      { name: "Favourites", img: Top50, url: "/player/favourites" },
      { name: "Following", img: Top50, url: "/player/following" },
    ];

    return (
      <div className={cx('sidebar-left')}>
        {menu.map(({name, img, url, sublinks}) =>
          <div key={name}>
            <NavLink
              className={cx('sidebar-left__link')}
              activeClassName={cx('sidebar-left__link--active')}
              to={url}
            >
              <div className={cx('link__image')}>
                <img src={img}/>
              </div>
              <div className={cx('link__name')}>
                {name}
              </div>
            </NavLink>
            {sublinks && <div className={cx('link__sublinks')}>
              {sublinks.map(({name, url}) =>
                <NavLink
                  key={name}
                  className={cx('sublink')}
                  activeClassName={cx('sublink--active')}
                  to={url}
                >
                  {name}
                </NavLink>
              )}
            </div>}
          </div>
        )}
        {children}
      </div>
    );
  }
}
