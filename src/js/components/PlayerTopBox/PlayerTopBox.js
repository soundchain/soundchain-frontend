import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { WidgetPlayerTop } from 'soundchain-ui-toolkit';

import cx from './PlayerTopBox.scss';

export default class PlayerTopBox extends Component {

  static propTypes = {

  }

  static defaultProps = {
  }

  render() {
    const breadcrumbs = [
      "Explore", "Rock", "Radiohead - Spectre"
    ];

    return (
      <div className={cx('box')}>
        <div className={cx('breadcrumbs')}>
          {breadcrumbs.map(it =>
            <div key={it} className={cx('breadcrumbs__item')}>{it}</div>
          )}
        </div>
      	<WidgetPlayerTop className={cx('align-right')}/>
      </div>
    );
  }
}
