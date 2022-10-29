import { Language, i18n } from './i18n';

export async function setLanguage (lang: Language): Promise<void> {
  const { default: translations } = await import(`./translation/${lang}.yml`);
  i18n.global.mergeLocaleMessage(lang, translations);
  i18n.global.locale.value = lang;
  (document.querySelector('html') as HTMLElement).setAttribute('lang', lang);
}
