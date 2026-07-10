import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  messages: {
    en,
    es,
  },
  // with this we dont have to do const {t} = useI18n()
  // we only have to do  $t("")
  // globalInjection:true
})
