<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'

const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    class="relative"
    @click="toggleTheme"
  >
    <Sun
      v-if="isDark"
      class="size-5 transition-all"
      data-icon="inline-start"
    />
    <Moon
      v-else
      class="size-5 transition-all"
      data-icon="inline-start"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>