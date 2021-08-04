import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CrashButtonScreen from '../screens/CrashButtonScreen';

import StandardTopTabBar from '../components/navigationElements/StandardTopTabBar';

const Tab = createMaterialTopTabNavigator();

const CrashlyticsNavigation = () => (
  <Tab.Navigator
    initialRouteName="Crash!"
    tabBar={StandardTopTabBar}
  >
    <Tab.Screen name="Crash!" component={CrashButtonScreen} />
  </Tab.Navigator>
);

export default CrashlyticsNavigation;
