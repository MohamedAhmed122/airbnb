import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RentScreen from '../Screen/RentScreen';
import RentDetails from '../Screen/RentScreenDetails';
import {primary} from '../Config/colors';
import ShowScreen from '../Screen/ShowScreen/ShowScreen';
import MapScreen from '../Screen/MapScreen';

const Stack = createStackNavigator();

export default function RentNavigation() {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerTintColor: primary,
      }}>
      <Stack.Screen
        component={ShowScreen}
        name="Show"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={RentScreen}
        name="Rent"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={MapScreen}
        name="Map"
        options={{headerShown: false}}
      />
      <Stack.Screen component={RentDetails} name="Rent Details" />
    </Stack.Navigator>
  );
}
