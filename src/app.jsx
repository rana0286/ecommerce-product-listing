import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ProductDetailsPage } from './pages';
import {  configureStore, initialStore } from './store';

const store = configureStore(initialStore);

const renderApp = () =>
  render(
    <Provider store={store}>
      <ProductDetailsPage />
    </Provider>,
    document.getElementById('root')
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./pages', renderApp);
}

renderApp();
