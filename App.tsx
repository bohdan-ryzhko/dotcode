import React from 'react';
import { Provider } from 'react-redux';

import { store } from './src/redux';

import { Main } from './src/screens';

export default function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
