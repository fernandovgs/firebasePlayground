import { Platform, NativeModules } from 'react-native';
import I18n from 'i18n-js';
import en from './locales/en';
import pt from './locales/pt';

const normalizeTranslate = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  en: 'en_US',
  pt_US: 'pt_BR',
};

const getLanguageDevice = () => (
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier
);

I18n.translations = {
  en_US: en,
  pt_BR: pt,
};

const setLanguageToI18n = () => {
  const language = getLanguageDevice();

  const translateNormalize = normalizeTranslate[language];

  const currentLocale = I18n.translations[translateNormalize]
    ? translateNormalize
    : 'en_US';

  I18n.defaultLocale = currentLocale;
  I18n.locale = currentLocale;
};

setLanguageToI18n();

export default (key) => I18n.t(key);
