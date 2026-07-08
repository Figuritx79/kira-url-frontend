<script setup lang="ts">
import { Link, ShieldCheck, Zap } from 'lucide-vue-next'

const features = [
  {
    icon: Zap,
    title: 'Rápido',
    description: 'Acorta tus URLs en segundos. Sin complicaciones.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguro',
    description: 'Tus enlaces están protegidos y disponibles cuando los necesites.',
  },
  {
    icon: Link,
    title: 'Confiable',
    description: 'Confía en tu pequeño amigo para acortar tu URL.',
  },
]
</script>

<template>
  <section id="features" class="w-full py-16 px-4">
    <div class="mx-auto max-w-5xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold tracking-tight mb-4">¿Por qué elegirnos?</h2>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
          Tu pequeño amigo siempre está listo para ayudarte
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card v-for="feature in features" :key="feature.title" class="text-center">
          <CardHeader>
            <div class="mx-auto mb-4">
              <div
                class="inline-flex items-center justify-center size-14 rounded-full bg-primary/10"
              >
                <component
                  :is="feature.icon"
                  class="size-7 text-primary"
                  data-icon="inline-start"
                />
              </div>
            </div>
            <CardTitle>{{ feature.title }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">{{ feature.description }}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
