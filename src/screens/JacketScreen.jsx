import React from 'react';

import ClothTemplate from '../components/templates/ClothTemplate';

import clothesAnalytics from '../analytics/clothesAnalytics';

const JacketScreen = () => (
  <ClothTemplate
    title="Jaqueta"
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
