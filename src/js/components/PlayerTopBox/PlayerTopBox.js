import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { 
  WidgetPlayerTags,
  WidgetPlayerTop,
} from '~/components/ui-toolkit';

import cx from './PlayerTopBox.scss';

export default class PlayerTopBox extends Component {

  static propTypes = {

  }

  static defaultProps = {
  }

  render() {
    return (
      <div>
      	<WidgetPlayerTags className={cx('align-left')}/>
      	<WidgetPlayerTop className={cx('align-right')}/>
      </div>
    );
  }
}
