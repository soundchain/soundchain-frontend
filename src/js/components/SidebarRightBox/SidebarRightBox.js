import React, { Component } from 'react';
import cx from './SidebarRightBox.scss';

export default class SidebarRightBox extends Component {
  render() {
    return (
      <div>
        {[1,2,3,4,5,6,7,8,9,10].map((i) => (
          <div style={{height: '100px'}} key={i}>SidebarRightBox</div>
        ))}
      </div>
    );
  }
}
