import React from 'react';

import ClothTemplate from '../components/templates/ClothTemplate';

import clothesAnalytics from '../analytics/clothesAnalytics';
import i18n from '../i18n/i18n';

// Using a direct object
const PantsScreen = () => (
  <ClothTemplate
    title={i18n.PANTS}
    onPress={async () => {
      await clothesAnalytics({
        eventName: 'pants',
        eventItem: {
          id: 123,
          item: 'pants',
          description: 'generic desc',
          size: 'L',
        },
      });
    }}
  />
);

export default PantsScreen;
