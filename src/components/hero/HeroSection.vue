<script setup lang="ts">
import UrlInputForm from './UrlInputForm.vue'
import KiraImagePlaceholder from './KiraImagePlaceholder.vue'
</script>

<template>
  <section class="w-full py-16 px-4 flex items-center">
    <div class="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div class="flex flex-col gap-8 order-2 lg:order-1">
        <div class="space-y-4 animate-fade-up">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Confía en tu pequeño amigo
          </h1>
          <p class="text-muted-foreground text-lg">
            Acorta tus URLs de forma sencilla y rápida
          </p>
        </div>

        <div class="animate-fade-up delay-200">
          <UrlInputForm />
        </div>
      </div>

      <div class="relative flex items-center justify-center order-1 lg:order-2 animate-fade-up delay-300">
        <KiraImagePlaceholder />
      </div>
    </div>
  </section>
</template>