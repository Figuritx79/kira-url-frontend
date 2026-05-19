<script setup lang="ts">
import { RouterView } from 'vue-router'
import ThemeToggle from '@/components/theme/ThemeToggle.vue'
</script>

<template>
  <div class="min-h-screen bg-background">
    <header class="border-b">
      <div class="mx-auto max-w-5xl flex items-center justify-between px-4 py-4">
        <div class="flex items-center gap-3">
          <img src="/kira-url-logo.png" alt="Kira URL" class="size-14" />
          <span class="font-semibold text-lg">kira-url</span>
        </div>
        <ThemeToggle />
      </div>
    </header>

    <RouterView />
  </div>
</template>
