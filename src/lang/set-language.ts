import { Language, i18n } from './i18n';

import availableLanguages from './available-languages.yml';

export async function setLanguage(lang: Language): Promise<void> {
  if (!Object.keys(availableLanguages).includes(lang)) {
    console.warn(`"${lang}" is not an available language in the app.`);
  } else {
    try {
      const { default: translations } = await import(`./translation/${lang}.yml`);
      i18n.global.mergeLocaleMessage(lang, translations);
    } catch (err: unknown) {
      console.warn(`i18n set language "${lang}": `, err);
    }
    i18n.global.locale.value = lang;
    (document.querySelector('html') as HTMLElement).setAttribute('lang', lang);
  }
}
