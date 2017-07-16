import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StreamContent } from '~/components/player';

@connect()
export default class PlayerStream extends Component {
  static propTypes = {
  }

  render() {
    return (
      <StreamContent />
    );
  }
}
