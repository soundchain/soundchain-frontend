import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import '~/../css/index.scss';

//import './helpers/offlinePlugin';

import Root from './containers/Root';

const root = document.getElementById('root');
const render = () => {
  ReactDOM.render(<AppContainer><Root/></AppContainer>, root);
};

render();

if (module.hot) {
  module.hot.accept('./containers/Root', render);
}