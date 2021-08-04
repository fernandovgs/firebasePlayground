import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import crashlytics from '@react-native-firebase/crashlytics';

import Routes from './navigations';

const App = () => {
  useEffect(() => {
    crashlytics().log('app mounted');
  }, []);

  return (
    <Routes />
  );
};

export default App;
