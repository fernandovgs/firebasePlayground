import React from 'react';

import ClothTemplate from '../components/templates/ClothTemplate';

import clothesAnalytics from '../analytics/clothesAnalytics';

const TShirtScreen = () => (
  <ClothTemplate
    title="Camiseta"
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
