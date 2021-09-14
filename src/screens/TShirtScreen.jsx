import React from 'react';

import ClothTemplate from '../components/templates/ClothTemplate';

import clothesAnalytics from '../analytics/clothesAnalytics';
import t from '../i18n';

const TShirtScreen = () => (
  <ClothTemplate
    title={t('T_SHIRT')}
    onPress={async () => {
      await clothesAnalytics({
        eventName: 'tshirt',
        eventItem: {
          id: 123,
          item: 'tshirt',
          description: 'generic desc',
          size: 'L',
        },
      });
    }}
  />
);

export default TShirtScreen;
