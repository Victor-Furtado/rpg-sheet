<script setup lang="ts">
interface OverlayProps {
    title?: string;
    closeOverlay?:() => void;
}

const props = defineProps<OverlayProps> ();

</script>

<template>
<div class="bg-white max-w-7xl w-full py-2 px-3">
    <div class="flex justify-between items-center mb-3">
        <h2 class="text-3xl font-title font-bold">{{title}}</h2>
        <svg @click="closeOverlay" class="w-8 h-8 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
    </div>
    <slot />
</div>
</template>

<style></style>
