<script setup lang="ts">
interface LabelProps {
  title: string;
  align?: 'start' | 'center' | 'end';
  help?: string;
}

const props = defineProps<LabelProps>();
</script>

<template>
  <label :class="`flex flex-col items-${align}`">
    <h3 class="block mb-2 font-title text-xl font-bold">
      {{ title }}
    </h3>
    <slot />
    <p class="mt-2 text-sm">{{ help }}</p>
  </label>
</template>
