<script setup lang="ts"></script>

<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@tailwind base;
@tailwind components;
@layer components {
  body {
    @apply text-text;
    @apply font-text;
    @apply bg-gray-300;
    @apply h-screen;
  }

  .input-text {
    @apply rounded-lg;
    @apply block;
    @apply w-full;
    @apply p-2;
  }

  .btn {
    @apply text-white;
    @apply bg-gray-500;
    @apply hover:bg-gray-800;
    @apply transition-colors;
    @apply font-medium;
    @apply rounded-lg;
    @apply text-sm;
    @apply px-5;
    @apply py-2.5;
    @apply mr-2;
    @apply mb-2;
    @apply focus:outline-none;
  }

  .btn-highlight {
    @apply bg-highlight-500;
    @apply hover:bg-highlight-800;
  }

  .btn-primary {
    @apply bg-primary-500;
    @apply hover:bg-primary-800;
  }

  .btn-secondary {
    @apply bg-secondary-500;
    @apply hover:bg-secondary-800;
  }
}

@tailwind utilities;

@layer utilities {
  .paper {
    @apply bg-white;
    @apply w-full;
    @apply max-w-7xl;
    @apply py-5;
    @apply px-16;
  }
}
</style>
