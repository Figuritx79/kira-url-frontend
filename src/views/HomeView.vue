<script setup lang="ts">
import HeroSection from '@/components/hero/HeroSection.vue'
import FeaturesSection from '@/components/features/FeaturesSection.vue'
import HowItWorksSection from '@/components/sections/HowItWorksSection.vue'
import FooterSection from '@/components/footer/FooterSection.vue'
import Separator from '@/components/ui/separator/Separator.vue'
</script>

<template>
  <main class="flex-1 flex flex-col">
    <HeroSection />
    <Separator class="max-w-4xl mx-auto my-8" />
    <HowItWorksSection />
    <Separator class="max-w-4xl mx-auto my-8" />
    <FeaturesSection />
    <FooterSection />
  </main>
</template>
