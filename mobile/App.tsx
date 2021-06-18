import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Routes from './src/routes/index'
import {ThemeManager} from './src/components/ThemeManager';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeManager>
          <Routes/>
      </ThemeManager>
    </Provider>
  );
}
