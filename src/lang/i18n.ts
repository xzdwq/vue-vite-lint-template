import availableLanguages from './available-languages.yml';
import { createI18n } from 'vue-i18n';
import dateTimeFormats from './format/date-time.yml';
import enUS from './translation/en-US.yml';
import numberFormats from './format/number.yml';

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') ? localStorage.getItem('locale')?.toString() : 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': enUS,
  },
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  dateTimeFormats,
  numberFormats,
});

export type Language = keyof typeof availableLanguages;
