import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import RentNavigation from './RentNavigation';
import HomeNavigation from './HomeNavigation';
import ChatNavigation from './ChatNavigation';
import SavedScreen from '../Screen/SavedScreen';

import {primary} from '../Config/colors';
import Fontsito from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const handleTabBarVisible = route => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Channel') {
      return false;
    }
    return true;
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: primary,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Explore"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontsito name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={RentNavigation}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="tripadvisor" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatNavigation}
        options={({route}) => ({
          tabBarVisible: handleTabBarVisible(route),
          tabBarIcon: ({color, size}) => (
            <AntDesign name="message1" size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={RentNavigation}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
