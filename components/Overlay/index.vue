<script setup lang="ts">
  const {componentList} = useOverlay();
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur bg-black/50"
  >
    <component :is="componentList[componentList.length-1]"></component>
  </div>
</template>

<style></style>
