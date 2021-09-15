import React from 'react';

import ClothTemplate from '../components/templates/ClothTemplate';

import clothesAnalytics from '../analytics/clothesAnalytics';
import useI18n from '../hooks/useI18n';

// using a hook (didn't sound very necessary to me)
const JacketScreen = () => {
  const i18n = useI18n();

  return (
    <ClothTemplate
      title={i18n.JACKET}
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
};

export default JacketScreen;
