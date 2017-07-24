import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import '~/../css/index.scss';

//import './helpers/offlinePlugin';

import Root from './containers/Root';

const root = document.getElementById('root');
const render = () => {
  console.log('Accepting the updated component!');

  const Root = require('./containers/Root').default;
  const { store, history } = require('~/store');

  ReactDOM.render(<AppContainer><Root store={store} history={history}/></AppContainer>, root);
};

render();

if (module.hot) {
  module.hot.accept('./containers/Root', () => render());
}