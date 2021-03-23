/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import BottomNav from './src/routes/bottomNav';

import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <BottomNav />
    </NavigationContainer>
  );
};

export default App;
