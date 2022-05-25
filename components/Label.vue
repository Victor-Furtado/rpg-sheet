<template>
  <label :class="`flex flex-col items-${align}`">
    <h3 class="block mb-2 font-title text-xl font-bold">
      {{ title }}
    </h3>
    <slot />
    <p class="mt-2 text-sm">{{ help }}</p>
  </label>
</template>

<script>
export default {
  props: {
    title: '',
    align: {
      type: String,
      default: 'start',
      validator(value) {
        return ['start', 'center', 'end'].includes(value);
      },
    },
    help: {
      default: '',
      type: String,
    },
  },
};
</script>
