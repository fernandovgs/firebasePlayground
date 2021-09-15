import I18n from 'i18n-js';
import en from './locales/en';
import pt from './locales/pt';
import CURRENT_LOCALE from './configLocales';

I18n.translations = {
  en_US: en,
  pt_BR: pt,
};

const setLanguageToI18n = () => {
  const language = CURRENT_LOCALE;

  const currentLocale = I18n.translations[language]
    ? language
    : 'en_US';

  I18n.defaultLocale = currentLocale;
  I18n.locale = currentLocale;
};

setLanguageToI18n();

export default (key) => I18n.t(key);
