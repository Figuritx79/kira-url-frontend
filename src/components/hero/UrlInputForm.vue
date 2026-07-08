<script setup lang="ts">
// TODO (pendiente backend): Sección "Usar texto personalizado"
// - Función: Permite elegir slug custom para URL corta (ej: kira-url.com/mi-slug)
// - Backend: Conectar POST /api/shorten, validar disponibilidad slug, guardar URL
import { ref } from 'vue'
import { Link2, ChevronDown, ChevronUp } from 'lucide-vue-next'

const url = ref('')
const customSlug = ref('')
const isExpanded = ref(false)
const error = ref('')

function handleSubmit() {
  const trimmed = url.value.trim()
  if (!trimmed) {
    error.value = 'Por favor ingresa una URL'
    return
  }
  try {
    new URL(trimmed)
    error.value = ''
  } catch {
    error.value = 'URL inválida'
  }
}
</script>

<template>
  <div class="w-full max-w-xl mx-auto">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <div class="flex gap-3">
        <div class="relative flex-1">
          <Link2
            class="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground"
            data-icon="inline-start"
          />
          <Input
            v-model="url"
            type="url"
            placeholder="https://tu-url-larga-aqui.com"
            class="pl-11 h-12 text-base focus:outline-1 focus:outline-primary rounded-md"
          />
        </div>
        <Button type="submit" class="h-12 px-6 bg-primary rounded-2xl dark:text-black text-white">
          Acortar
        </Button>
      </div>
      <p v-if="error" class="text-sm text-destructive -mt-2 pl-1">{{ error }}</p>

      <button
        type="button"
        class="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors self-start pl-1"
        @click="isExpanded = !isExpanded"
      >
        <span>Usar texto personalizado</span>
        <component
          :is="isExpanded ? ChevronUp : ChevronDown"
          class="size-4"
          data-icon="inline-end"
        />
      </button>

      <div v-if="isExpanded" class="flex items-center gap-0.5 animate-fade-up">
        <span class="text-sm text-muted-foreground shrink-0 font-mono">kira-url.link/</span>
        <Input
          id="slug"
          v-model="customSlug"
          type="text"
          placeholder="mi-slug"
          class="h-8 font-mono focus:outline-0 focus:ring-1 focus:ring-primary rounded-md w-28"
        />
      </div>
    </form>
  </div>
</template>
