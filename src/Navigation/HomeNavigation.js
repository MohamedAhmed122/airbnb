import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen';
import SearchScreen from '../Screen/SearchScreen';
import GuestScreen from '../Screen/GuestScreen';
import {primary} from '../Config/colors';
import RentNavigation from './RentNavigation';
import ShowScreen from '../Screen/ShowScreen/ShowScreen';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerTintColor: primary,
      }}>
      <Stack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={SearchScreen}
        name="SearchScreens"
        options={{title: 'where are you going?'}}
      />
      <Stack.Screen
        component={GuestScreen}
        name="GuestScreens"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={RentNavigation}
        name="RentScreens"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
