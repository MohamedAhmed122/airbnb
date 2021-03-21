import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import HomeScreen from './src/Screen/HomeScreen';
import RentScreen from './src/Screen/RentScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <RentScreen />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
