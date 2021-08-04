import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import JacketScreen from '../screens/JacketScreen';
import PantsScreen from '../screens/PantsScreen';
import TShirtScreen from '../screens/TShirtScreen';

import StandardTopTabBar from '../components/navigationElements/StandardTopTabBar';

const Tab = createMaterialTopTabNavigator();

const ClothNavigation = () => (
  <Tab.Navigator
    initialRouteName="Jaqueta"
    tabBar={StandardTopTabBar}
  >
    <Tab.Screen name="Jaqueta" component={JacketScreen} />
    <Tab.Screen name="Calça" component={PantsScreen} />
    <Tab.Screen name="Camisa" component={TShirtScreen} />
  </Tab.Navigator>
);

export default ClothNavigation;
