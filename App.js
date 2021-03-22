import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/Navigation/TabNavigation';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

//AIzaSyAu8axlrbXc9Fv64E4NJdssfQwcm2h5XFA
