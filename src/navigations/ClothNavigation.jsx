import React from 'react';

import { createMaterialTopTabNavigator, MaterialTopTabBar } from '@react-navigation/material-top-tabs';
import JacketScreen from '../screens/JacketScreen';
import PantsScreen from '../screens/PantsScreen';
import TShirtScreen from '../screens/TShirtScreen';

const Tab = createMaterialTopTabNavigator();

const ClothNavigation = () => (
  <Tab.Navigator
    initialRouteName="Jacket"
    tabBar={(props) => (
      <MaterialTopTabBar
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        labelStyle={{
          fontSize: 14,
          color: 'white',
          flex: 1,
          width: '100%',
          fontWeight: 'bold',
        }}
        style={{
          backgroundColor: '#328dff',
        }}
        indicatorStyle={{
          backgroundColor: 'black',
        }}
      />
    )}
  >
    <Tab.Screen name="Jaqueta" component={JacketScreen} />
    <Tab.Screen name="Calça" component={PantsScreen} />
    <Tab.Screen name="Camisa" component={TShirtScreen} />
  </Tab.Navigator>
);

export default ClothNavigation;
