import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Routes from './src/routes/index'
import {ThemeManager} from './src/components/ThemeManager';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <ThemeManager>
            <Routes/>
        </ThemeManager>
      </Provider>
    </SafeAreaView>
  );
}
