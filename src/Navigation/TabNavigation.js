import React from 'react';
import Fontsito from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {primary} from '../Config/colors';
import HomeScreen from '../Screen/HomeScreen';
import RentScreen from '../Screen/RentScreen';
import SearchScreen from '../Screen/SearchScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: primary,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontsito name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={RentScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={RentScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="tripadvisor" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="chat" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={RentScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}