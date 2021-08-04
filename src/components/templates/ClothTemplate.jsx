import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import clothTemplateStyle from '../../styles/clothTemplateStyle';
import CustomButton from '../CustomButton';

const ClothTemplate = ({ title, onPress }) => (
  <SafeAreaView style={clothTemplateStyle.mainContainer}>
    <ScrollView
      contentContainerStyle={clothTemplateStyle.scrollViewContainer}
      scrollEnabled
      showsVerticalScrollIndicator
    >
      {/* Title */}
      <View style={clothTemplateStyle.titleContainer}>
        <Text style={clothTemplateStyle.titleLabel}>{title}</Text>
      </View>

      {/* Product Info */}
      <View style={clothTemplateStyle.productInfoContainer}>
        <Text>FOTO</Text>
      </View>

      {/* Buy button */}
      <CustomButton onPress={onPress} label="Comprar" />

    </ScrollView>
  </SafeAreaView>
);

ClothTemplate.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

ClothTemplate.defaultProps = {
  title: '',
  onPress: null,
};

export default ClothTemplate;
