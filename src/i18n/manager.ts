import type { I18n } from 'vue-i18n'
import i18n from '.'

const localeModules = import.meta.glob('./locales/*.json')
let _i18n: typeof i18n | null = null
const I18nManager = {
  get supportedLocales() {
    return Object.keys(localeModules)
      .map((file) => file.match(/\.\/locales\/([^/]+)\.json$/)?.[1])
      .filter(Boolean)
  },
  init(i18nInstance: typeof i18n) {
    if (!i18nInstance?.global?.locale) {
      throw new Error('I18nManager.init: invalid i18n instance')
    }
    _i18n = i18nInstance
  },

  async setLocale(newLocale: string) {
    if (!_i18n) throw new Error('I18nManager.setLocale called before init')

    const current = _i18n.global.locale.value

    if (current !== newLocale) {
      _i18n.global.locale.value = newLocale
    }

    document.documentElement.lang = newLocale
  },
}

export default I18nManager
