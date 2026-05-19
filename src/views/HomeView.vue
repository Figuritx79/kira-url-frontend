<script setup lang="ts">
import HeroSection from '@/components/hero/HeroSection.vue'
import HowItWorksSection from '@/components/sections/HowItWorksSection.vue'
import FooterSection from '@/components/footer/FooterSection.vue'
import Separator from '@/components/ui/separator/Separator.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-1">
      <HeroSection />
      <Separator class="max-w-4xl mx-auto my-8" />
      <HowItWorksSection />
    </main>
    <FooterSection />
  </div>
</template>
