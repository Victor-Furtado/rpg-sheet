<script setup lang="ts">
interface OverlayProps {
  isOpen?: boolean;
}

const props = defineProps<OverlayProps>();
</script>

<template>
  <div
    v-show="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur bg-black/50"
  >
    <slot />
  </div>
</template>

<style></style>
