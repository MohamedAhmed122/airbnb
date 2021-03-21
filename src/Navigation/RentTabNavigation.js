import React from 'react';

import RentScreen from '../Screen/RentScreen';
import MapScreen from '../Screen/MapScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={RentScreen} />
      <Tab.Screen name="Settings" component={MapScreen} />
    </Tab.Navigator>
  );
}
export default MyTabs;
