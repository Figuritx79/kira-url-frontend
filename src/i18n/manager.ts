const localeModules = import.meta.glob('./locales/*.json')
let _i18n = null;
const I18nManager = {
  get supportedLocales() {
    return Object.keys(localeModules)
      .map((file) => file.match(/\.\/locales\/([^/]+)\.json$/)?.[1])
      .filter(Boolean)
  },
  init(i18nInstance) {
    if (!i18nInstance?.global?.locale) {
      throw new Error("I18nManager.init: invalid i18n instance");
    }
    _i18n = i18nInstance;
  },

  async setLocale(newLocale) {
    if (!_i18n) throw new Error("I18nManager.setLocale called before init");

    const current = _i18n.global.locale.value;

    if (current !== newLocale) {
      _i18n.global.locale.value = newLocale;
    }

    document.documentElement.lang = newLocale;
  },}

export default I18nManager
