<template>
  <div class="inline-flex items-center">
    <button
      class="w-8 h-8 rounded-l-full bg-secondary-500 text-white text-2xl font-black"
      @click="$emit('update:modelValue', modelValue - 1)"
    >
      -
    </button>
    <input
      type="number"
      class="font-sans text-3xl border-y"
      v-model="modelValue"
      @keypress="isNumber($event)"
    />
    <button
      class="w-8 h-8 rounded-r-full bg-secondary-500 text-white text-2xl font-black"
      @click="$emit('update:modelValue', modelValue + 1)"
    >
      +
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    modelValue: 0,
    clamp: false,
  },
  updated() {
    if(this.clamp && this.modelValue < 0) this.$emit('update:modelValue', 0)  
  },
  methods: {
    isNumber: (e) => {
      e = e ? e : window.event;
      var charCode = e.which ? e.which : e.keyCode;
      if (charCode < 48 || charCode > 57) {
        e.preventDefault();
      } else {
        return true;
      }
    },
  },
};
</script>

<style scoped>
input[type='number'] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

input[type='number'] {
  max-width: 3rem;
  padding: 0.5rem;
  height: 2rem;
  font-weight: bold;
  text-align: center;
}
</style>
