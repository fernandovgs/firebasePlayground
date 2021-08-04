import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ClothNavigation from './ClothNavigation';
import CrashlyticsNavigation from './CrashlyticsNavigation';

const Tab = createBottomTabNavigator();

const MainNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen name="CLOTH" component={ClothNavigation} />
    <Tab.Screen name="CRASH" component={CrashlyticsNavigation} />
  </Tab.Navigator>
);

export default MainNavigation;
