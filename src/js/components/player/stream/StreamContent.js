import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { 
  WidgetStreamTrack,
  WidgetStreamPlaylist,
  WidgetStreamAlbum,
} from '~/components/ui-toolkit';

import cx from './StreamContent.scss';

const EXAMPLE_STREAM = [
  { type: 'track' }, 
  { type: 'playlist' },
  { type: 'track' },
  { type: 'album' },
]

export default class StreamContent extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }


  render() {
    return (
      <div>
        {EXAMPLE_STREAM.map((item, key) => {
          if (item.type === 'track') {
            return <WidgetStreamTrack key={key}/>;
          } else if (item.type === 'playlist') {
            return <WidgetStreamPlaylist key={key}/>;  
          } else if (item.type === 'album') {
            return <WidgetStreamAlbum key={key}/>;  
          }

          console.error('Stream item has unavailable type: ', item);
          return null;
        })}
      </div>
    );
  }
}
