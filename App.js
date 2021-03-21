import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import HomeScreen from './src/Screen/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <HomeScreen />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
