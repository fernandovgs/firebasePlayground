import React from 'react';

import { createMaterialTopTabNavigator, MaterialTopTabBar } from '@react-navigation/material-top-tabs';
import SimplePage from 'firebase-playground-submodule';
import JacketScreen from '../screens/JacketScreen';
import PantsScreen from '../screens/PantsScreen';
import TShirtScreen from '../screens/TShirtScreen';

import useI18n from '../hooks/useI18n';

const Tab = createMaterialTopTabNavigator();

const ClothNavigation = () => {
  const i18n = useI18n();

  return (
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
      <Tab.Screen name={i18n.JACKET} component={JacketScreen} />
      <Tab.Screen name={i18n.PANTS} component={PantsScreen} />
      <Tab.Screen name={i18n.T_SHIRT} component={TShirtScreen} />
      <Tab.Screen name={i18n.SUBMODULE} component={SimplePage} />
    </Tab.Navigator>
  );
};

export default ClothNavigation;
