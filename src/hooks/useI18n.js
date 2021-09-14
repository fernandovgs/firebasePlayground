import { useState } from 'react';
import t from '../i18n';

const useI18n = () => {
  const [i18n] = useState({
    JACKET: t('JACKET'),
    PANTS: t('PANTS'),
    T_SHIRT: t('T_SHIRT'),
    BUY: t('BUY'),
    PHOTO: t('PHOTO'),
  });

  return i18n;
};

export default useI18n;
