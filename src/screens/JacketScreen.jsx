import React from 'react';

import ClothTemplate from '../components/templates/ClothTemplate';

import clothesAnalytics from '../analytics/clothesAnalytics';
import t from '../i18n';

const JacketScreen = () => (
  <ClothTemplate
    title={t('JACKET')}
    onPress={async () => {
      await clothesAnalytics({
        eventName: 'jacket',
        eventItem: {
          id: 123,
          item: 'jacket',
          description: 'generic desc',
          size: 'L',
        },
      });
    }}
  />
);

export default JacketScreen;
