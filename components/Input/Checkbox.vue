<script setup lang="ts">
interface CheckboxProps {
    label: string;
    modelValue?: boolean;
}

const props = defineProps<CheckboxProps>();
</script>

<template>
<div class="custom-label flex mt-2 ml-3" @click="$emit('update:modelValue', !modelValue)">
    <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
        <input type="checkbox" v-model="modelValue" class="hidden" checked>
        <svg class="hidden w-4 h-4 text-secondary-500 pointer-events-none" viewBox="0 0 172 172">
            <g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal">
                <path d="M0 172V0h172v172z" />
                <path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1" />
            </g>
        </svg>
    </div>
    <span class="select-none text-lg" :class="{ 'font-bold': modelValue }">{{label}}</span>
</div>
</template>

<style scoped>
    .custom-label input:checked + svg {
        display: block !important;
    }
</style>
