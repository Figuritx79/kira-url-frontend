<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    @click="toggleTheme"
    :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
  >
    <Transition name="theme-icon" mode="out-in">
      <Sun v-if="!isDark" key="sun" class="size-5" />
      <Moon v-else key="moon" class="size-5" />
    </Transition>
    <span class="sr-only">{{ isDark ? 'Modo claro' : 'Modo oscuro' }}</span>
  </Button>
</template>

<style scoped>
.theme-icon-enter-active,
.theme-icon-leave-active {
  transition: all 0.2s ease;
}
.theme-icon-enter-from {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}
.theme-icon-leave-to {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}
</style>
