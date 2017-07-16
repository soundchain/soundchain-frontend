import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cx from './PlayerSidebarLeft.scss';

export default class PlayerSidebarLeft extends Component {

  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    return (
      <div>
      	{[1,2,3,4,5,6,7,8,9,10].map((i) => (
          <div style={{height: '100px'}} key={i}>PlayerSidebarLeft</div>
        ))}
      </div>
    );
  }
}