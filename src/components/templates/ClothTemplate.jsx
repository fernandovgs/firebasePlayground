import React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import clothTemplateStyle from '../../styles/clothTemplateStyle';

import t from '../../i18n';

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
        <Text>{t('PHOTO')}</Text>
      </View>

      {/* Buy button */}
      <TouchableOpacity style={clothTemplateStyle.buyButtonTouchable} onPress={onPress}>
        <View style={clothTemplateStyle.buyButtonContainer}>
          <Text style={clothTemplateStyle.buyButtonTitle}>{t('BUY')}</Text>
        </View>
      </TouchableOpacity>

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
