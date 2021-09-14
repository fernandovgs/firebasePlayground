import React from 'react';

import ClothTemplate from '../components/templates/ClothTemplate';

import clothesAnalytics from '../analytics/clothesAnalytics';
import t from '../i18n';

const PantsScreen = () => (
  <ClothTemplate
    title={t('PANTS')}
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
