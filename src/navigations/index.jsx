import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';

// import ClothNavigation from './ClothNavigation';
import MainNavigation from './MainNavigation';

const Routes = () => {
  const routeNameRef = useRef();
  const navigationRef = useRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_class: currentRouteName,
            screen_name: currentRouteName,
          });
        }

        routeNameRef.current = currentRouteName;
      }}
    >
      {/* <ClothNavigation /> */}
      <MainNavigation />
    </NavigationContainer>

  );
};

// const Routes = createAppContainer(mainRoutes);

export default Routes;
