import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';

import crashButtonScreenStyle from '../styles/crashButtonScreenStyle';

const CrashButtonScreen = () => (
  <SafeAreaView style={crashButtonScreenStyle.mainContainer}>
    <View style={crashButtonScreenStyle.crashButtonContainer}>
      <CustomButton label="CRASH!" />
    </View>
  </SafeAreaView>
);

export default CrashButtonScreen;
