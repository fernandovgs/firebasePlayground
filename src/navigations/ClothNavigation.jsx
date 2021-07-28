import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import JacketScreen from '../screens/JacketScreen';
import PantsScreen from '../screens/PantsScreen';
import ShirtScreen from '../screens/ShirtScreen';

const Tab = createMaterialTopTabNavigator();

const ClothNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen name="Jaqueta" component={JacketScreen} />
    <Tab.Screen name="Calça" component={PantsScreen} />
    <Tab.Screen name="Camiseta" component={ShirtScreen} />
  </Tab.Navigator>
);
// const ClothNavigation = createMaterialTopTabNavigator({
//   JacketScreen: {
//     screen: JacketScreen,
//   },
//   PantsScreen: {
//     screen: PantsScreen,
//   },
//   ShirtScreen: {
//     screen: ShirtScreen,
//   },
// }, {
//   initialRouteName: 'JacketScreen',
//   navigationOptions: {
//     headerShown: false,
//   },
//   tabBarOptions: {
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
// });

export default ClothNavigation;
