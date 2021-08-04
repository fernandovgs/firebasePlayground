import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import customButtonStyle from '../styles/customButtonStyle';

const CustomButton = ({ onPress, label }) => (
  <TouchableOpacity style={customButtonStyle.customButtonTouchable} onPress={onPress}>
    <View style={customButtonStyle.customButtonContainer}>
      <Text style={customButtonStyle.customButtonTitle}>{label}</Text>
    </View>
  </TouchableOpacity>
);

CustomButton.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
};

CustomButton.defaultProps = {
  label: '',
  onPress: null,
};

export default CustomButton;
