import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const preloadedState = { session: { currentUser: window.currentUser }};
  let store = configureStore(preloadedState);
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, rootEl);
  window.store = store;
});
