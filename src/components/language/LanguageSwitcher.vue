<script lang="ts" setup>
import { Globe } from 'lucide-vue-next'
import I18nManager from '@/i18n/manager'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })
const suportLocale = I18nManager.supportedLocales.filter(Boolean) as string[]

const switchLanguage = async (newLocale: string) => {
  await I18nManager.setLocale(newLocale)
}
</script>

<template>
  <div
    class="group relative flex items-center rounded-md text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]"
  >
    <Globe class="pointer-events-none absolute left-2.5 size-4 shrink-0" aria-hidden="true" />
    <select
      id="language-select"
      :value="locale"
      @change="switchLanguage($event?.target?.value)"
      class="appearance-none bg-transparent py-2 pl-8 pr-7 text-sm font-medium text-foreground outline-none transition-colors hover:cursor-pointer focus:ring-0 focus:border-none focus:outline-none"
    >
      <option
        v-for="loc in suportLocale"
        :key="loc"
        :value="loc"
        class="bg-background text-foreground"
      >
        {{ loc.toUpperCase() }}
      </option>
    </select>
    <svg
      class="pointer-events-none absolute right-2 size-3 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </div>
</template>
