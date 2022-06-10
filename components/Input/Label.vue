<script setup lang="ts">
interface LabelProps {
  title: string;
  align?: 'start' | 'center' | 'end';
  help?: string;
  tooltip?: string; 
}

const props = defineProps<LabelProps>();
</script>

<template>
  <label :class="`flex flex-col items-${align}`">
    <h3 class="flex items-center gap-2 mb-2 font-title text-xl font-bold">
      {{ title }}
        <Tooltip v-show="!!tooltip" :text="tooltip">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
            </svg>
        </Tooltip>
    </h3>
    <slot />
    <p class="mt-2 text-sm">{{ help }}</p>
  </label>
</template>
