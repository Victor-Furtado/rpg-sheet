<template>
  <button
    @click="$emit('update:modelValue', !modelValue)"
    class="w-full btn transition-colors"
    :class="{ 'btn-secondary' : modelValue}"
  >
    <p class="text-lg" :class="{ 'font-bold': modelValue }">{{ label }}</p>
    <input type="checkbox" v-model="modelValue" class="hidden" />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    label: String,
    modelValue: false,
  },
};
</script>

<style scoped>
</style>
