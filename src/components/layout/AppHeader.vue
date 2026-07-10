<script setup lang="ts">
import ThemeToggle from '@/components/theme/ThemeToggle.vue'
import LanguageSwitcher from '@/components/language/LanguageSwitcher.vue'
import { useI18n } from 'vue-i18n'
// t means translate
const { t } = useI18n()
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
    <div class="mx-auto max-w-5xl flex items-center justify-between px-4 h-16">
      <a href="/" class="flex items-center gap-2.5 shrink-0">
        <img src="/kira-url-icon-no-text.svg" alt="Kira URL" class="size-8" />
        <span class="font-bold text-lg tracking-tight">Kira URL</span>
      </a>

      <nav class="hidden sm:flex items-center gap-6 text-sm font-medium text-muted-foreground">
        <a href="#" class="hover:text-foreground transition-colors">
          {{ t('nav.home') }}
        </a>
        <a href="#how-it-works" class="hover:text-foreground transition-colors">
          {{ t('nav.howItWorks') }}
        </a>
        <a href="#features" class="hover:text-foreground transition-colors">
          {{ t('nav.features') }}
        </a>
      </nav>

      <div class="flex items-center gap-1">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
