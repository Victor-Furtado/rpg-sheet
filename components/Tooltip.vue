<script setup lang="ts">
interface TooltipProps {
    text?: string;
}
const props = defineProps <TooltipProps> ();
</script>

<template>
<span class="group cursor-help inline-block relative">
    <div class="group-hover:block hidden absolute z-10 w-96 text-center bottom-full left-1/2 transform -translate-x-1/2 mb-1">
        <div class="relative mx-2">
            <div class="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom-full">
                <p v-for="t in text?.split('\n')">{{t}}</p>
                <svg class="absolute h-3 w-full left-0 top-full" viewBox="0 0 255 255">
                    <polygon points="0,0 127.5,127.5 255,0" /></svg>
            </div>
        </div>
    </div>
    <slot />
</span>
</template>
