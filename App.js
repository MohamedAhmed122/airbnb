import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import HomeScreen from './src/Screen/HomeScreen';
import RentScreen from './src/Screen/RentScreen';
import SearchScreen from './src/Screen/SearchScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './src/Navigation/TabNavigation';

const Stack = createStackNavigator();

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
