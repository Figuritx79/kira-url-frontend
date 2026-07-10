import { createI18n } from 'vue-i18n'
import { messages } from './messages'
export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  messages: messages,
  // with this we dont have to do const {t} = useI18n()
  // we only have to do  $t("")
  // globalInjection:true
})
