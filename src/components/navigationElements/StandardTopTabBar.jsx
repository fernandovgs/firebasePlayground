import React from 'react';
import { MaterialTopTabBar } from '@react-navigation/material-top-tabs';

const StandardTopTabBar = (props) => (
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
);

export default StandardTopTabBar;
