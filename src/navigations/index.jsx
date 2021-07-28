import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import ClothNavigation from './ClothNavigation';

const Routes = () => (
  <NavigationContainer>
    <ClothNavigation />
  </NavigationContainer>
);

// const Routes = createAppContainer(mainRoutes);

export default Routes;
