<script setup lang="ts">
import { Link, MousePointerClick, Share2 } from 'lucide-vue-next'

const steps = [
  {
    icon: MousePointerClick,
    number: '1',
    title: 'Pega tu URL',
    description: 'Copia la URL larga que quieres acortar y pégala en el campo.',
  },
  {
    icon: Link,
    number: '2',
    title: 'Kira la acorta',
    description: 'Nuestra pequeña amiga crea un enlace corto y memorable.',
  },
  {
    icon: Share2,
    number: '3',
    title: 'Compártelo',
    description: 'Copia tu nueva URL y compártela donde quieras.',
  },
]
</script>

<template>
  <section class="w-full py-24 px-4">
    <div class="mx-auto max-w-4xl">
      <div class="text-center mb-16 animate-fade-up">
        <h2 class="text-3xl font-bold tracking-tight mb-3">
          Cómo funciona
        </h2>
        <p class="text-muted-foreground">
          Tres pasos simples para acortar tu URL
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(step, index) in steps"
          :key="step.number"
          class="relative bg-card shadow-sm dark:border dark:border-border rounded-xl p-8 flex flex-col items-center text-center gap-5 animate-fade-up"
          :class="`delay-${(index + 1) * 100}`"
        >
          <div class="absolute -top-3 -left-3 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
            {{ step.number }}
          </div>
          <div class="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
            <component :is="step.icon" class="w-7 h-7 text-primary" data-icon="inline-start" />
          </div>
          <div class="space-y-2">
            <h3 class="font-semibold text-lg">{{ step.title }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed max-w-48">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>