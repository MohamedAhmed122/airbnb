import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/Navigation/TabNavigation';
import {Provider} from 'react-redux';

import {store} from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;

//AIzaSyAu8axlrbXc9Fv64E4NJdssfQwcm2h5XFA
