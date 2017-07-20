import React from 'react';
import { NavLink } from 'react-router-dom';

import cx from './WidgetStreamItemInfo.scss';

export default function WidgetStreamItemInfo(props) {
  console.log(props);
  return (
    <div className={cx('item-info')}>
      <img className={cx('item-info__image')} src={props.imgSrc}/>
      <div className={cx('item-info__text')}>
        <NavLink
          className={cx('item-info__link')}
          to={props.url}
        >
          {props.ownerName}
        </NavLink>
        <div className={cx('info')}>{props.action} {props.date.toString()}</div>
      </div>
    </div>
  );
}
