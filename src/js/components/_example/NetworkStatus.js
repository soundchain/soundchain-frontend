import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NetworkStatus extends Component {
  static propTypes = {
    name: PropTypes.bool,
    network: PropTypes.object.isRequired,
    web3: PropTypes.object,
  };

  static defaultProps = {
    web3: undefined,
    name: false,
  };

  render() {
    const { web3, network, name } = this.props;
    const status = {
      connected: { content: 'Connected', color: 'green', icon: 'checkmark' },
      disconnected: { content: 'No Connection', color: 'red', icon: 'unlinkify' },
      disabled: { content: 'Disabled', icon: 'remove' },
      connecting: { content: 'Connecting...', color: 'orange', icon: 'wait' },
    }[web3 ? web3.connectionStatus() : 'disabled'];
    
    return (
      <div>
        {name ? network.name : status.content} {status.content}
      </div>
    );
  }
}
