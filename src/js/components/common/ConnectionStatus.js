import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import web3Connect from '~/helpers/web3/connect';

import { getNetworks } from '~/selectors';
import NetworkStatus from '~/components/common/NetworkStatus';

@web3Connect
@connect(state => ({ networks: getNetworks(state) }))
export default class ConnectionStatus extends Component {
  static propTypes = {
    web3Redux: PropTypes.object.isRequired,
    networks: PropTypes.array.isRequired,
  };

  render() {
    const { web3Redux, networks } = this.props;

    const items = networks.map((network) => {
      const web3 = web3Redux.web3(network.id);
      if (!network.enabled || !web3 || web3.connectionStatus() !== 'connected') return null;
      return { network, web3 };
    }).filter(w => w);

    return (
      <div>
        {web3Redux.pendingRequests() &&
          'Loading'
        }
        {items.map(props => <NetworkStatus key={props.network.id} {...props} name />)}
      </div>
    );
  }
}
