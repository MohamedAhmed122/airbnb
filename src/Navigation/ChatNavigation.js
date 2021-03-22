import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChannelScreen from '../Screen/ChannelScreen';
import ChatScreen from '../Screen/ChatScreen';
import {primary} from '../Config/colors';

const Stack = createStackNavigator();

export default function ChatNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: primary,
      }}>
      <Stack.Screen
        component={ChatScreen}
        name="ChatScreen"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ChannelScreen}
        name="Channel"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
