import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import PropTypes from 'prop-types';

const ClothTemplate = ({ testLabel }) => (
  <SafeAreaView>
    <Text>{testLabel}</Text>
  </SafeAreaView>
);

ClothTemplate.propTypes = {
  testLabel: PropTypes.string,
};

ClothTemplate.defaultProps = {
  testLabel: '',
};

export default ClothTemplate;
