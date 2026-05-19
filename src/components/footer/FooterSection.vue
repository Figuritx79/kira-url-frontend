<script setup lang="ts">
import { Heart, Github } from 'lucide-vue-next'
</script>

<template>
  <footer class="w-full border-t border-border/40 py-8 px-4">
    <div class="mx-auto max-w-4xl flex items-center justify-between">
      <div class="flex items-center gap-2 animate-fade-up">
        <img src="/kira-url-logo.png" alt="Kira URL" class="size-5" />
        <span class="text-sm text-muted-foreground">kira-url © 2026</span>
      </div>

      <div class="flex items-center gap-1 animate-fade-up delay-200">
        <span class="text-sm text-muted-foreground">Hecho con</span>
        <Heart class="size-3 text-primary" data-icon="inline-end" />
        <span class="text-sm text-muted-foreground">y Vue</span>
      </div>

      <div class="animate-fade-up delay-300">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener"
          class="text-muted-foreground/60 hover:text-foreground transition-colors"
        >
          <Github class="size-5" />
        </a>
      </div>
    </div>
  </footer>
</template>
