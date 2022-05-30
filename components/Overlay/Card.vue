<script setup lang="ts">
    const {componentList} = useOverlay();
    const handleExit = () => componentList.value = [];
</script>

<template>
<div v-click-outside="handleExit" class="bg-white min-w-max">
    <slot />
</div>
</template>

<style></style>
