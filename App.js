// App.js veya App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Index from './src/index';

const App = () => (
  <Provider store={store}>
    <Index />
  </Provider>
);

export default App;
