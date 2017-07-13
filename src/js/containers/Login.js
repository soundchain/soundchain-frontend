import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { replace } from 'react-router-redux';
//import { loginContainerSelector } from 'selectors'; // for nextPathname

/*
import Loader from 'components/Loader';
import LoginForm from 'components/LoginForm';
*/

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    replace,
  }, dispatch);
}

@connect(null, mapDispatchToProps)
export default class Login extends Component {

  static propTypes = {
    nextPathname: PropTypes.string,
    replace: PropTypes.func,
  };

  static defaultProps = {
    nextPathname: '/'
  };

  componentWillReceiveProps(nextProps, oldProps) {
    if (nextProps.isLogged) {
      this.props.replace(this.props.nextPathname);
    }
  }

  render() {
    const {
      signIn, signUp,
      loading, error, isLogged
    } = this.props;

    if (loading) {
      //return <Loader />;
    }

    return (
      <div>
        Login
        {/*
          <LoginForm
            onSignIn={signIn}
            onSignUp={signUp}
            error={error}
          />
        */}
      </div>
    );
  }
}
