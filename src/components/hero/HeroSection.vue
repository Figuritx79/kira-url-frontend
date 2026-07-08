<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import UrlInputForm from './UrlInputForm.vue'
import KiraImagePlaceholder from './KiraImagePlaceholder.vue'

const titleRef = ref<HTMLDivElement>()
const formRef = ref<HTMLDivElement>()
const imageRef = ref<HTMLDivElement>()

onMounted(() => {
  if (titleRef.value) {
    gsap.fromTo(
      titleRef.value,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
    )
  }

  if (formRef.value) {
    gsap.fromTo(
      formRef.value,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.15 },
    )
  }

  if (imageRef.value) {
    gsap.fromTo(
      imageRef.value,
      { opacity: 0, y: 24, scale: 0.92 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.4)', delay: 0.3 },
    )
  }
})
</script>

<template>
  <section class="relative w-full py-16 px-4 flex items-center overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none"
    ></div>
    <div
      class="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
    >
      <div class="flex flex-col gap-8 order-2 lg:order-1">
        <div ref="titleRef" class="space-y-4">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Confía en tu pequeño amigo
          </h1>
          <p class="text-muted-foreground text-lg">Acorta tus URLs de forma sencilla y rápida</p>
        </div>

        <div ref="formRef">
          <UrlInputForm />
        </div>
      </div>

      <div ref="imageRef" class="relative flex items-center justify-center order-1 lg:order-2">
        <KiraImagePlaceholder />
      </div>
    </div>
  </section>
</template>
