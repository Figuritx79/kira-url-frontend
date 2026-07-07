<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const imageRef = ref<HTMLImageElement>()

onMounted(() => {
  if (!imageRef.value) return

  // Smooth entrance: opacity + subtle scale, no overshoot
  gsap.fromTo(
    imageRef.value,
    { opacity: 0, scale: 0.95 },
    { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' },
  )

  // Continuous gentle Y floating — short cycle, sine easing
  gsap.to(imageRef.value, {
    y: -4,
    duration: 1.6,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
  })
})
</script>

<template>
  <div class="w-72 h-72 rounded-2xl flex items-center justify-center">
    <img
      ref="imageRef"
      src="/kira-url-square.svg"
      alt="Kira"
      class="w-full h-full object-contain drop-shadow-xl"
    />
  </div>
</template>
