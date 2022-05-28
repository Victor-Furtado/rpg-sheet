<script setup lang="ts">
import { talents } from '@/data.json';
const { sheet } = useSheet();
</script>

<template>
  <div class="paper container flex flex-col gap-6">
    <div class="grid xl:grid-cols-3 2xl:grid-cols-6 gap-2">
      <div v-for="(value, name) in talents" :key="name" class="flex flex-col">
        <Label :title="value.label" align="center">
          <NumberInput :clamp="true" v-model="sheet.talents[name]" />
        </Label>
        <CheckboxButton
          v-for="(verb, key) in value.verbs"
          :key="key"
          :label="verb"
          v-model="sheet.verbs[key]"
        />
      </div>
    </div>
    <div class="grid xl:grid-cols-2 2xl:grid-cols-4">
      <div class="px-4 flex flex-col">
        <h2 class="text-center block mb-2 font-title text-xl font-bold">
          Dons
        </h2>
        <button class="btn">ADICIONAR</button>
      </div>
      <div class="px-4 flex flex-col">
        <h2 class="text-center block mb-2 font-title text-xl font-bold">
          Méritos
        </h2>
        <button class="btn">ADICIONAR</button>
      </div>
      <div class="px-4 flex flex-col">
        <h2 class="text-center block mb-2 font-title text-xl font-bold">
          Habilidades
        </h2>
        <button class="btn">ADICIONAR</button>
      </div>
      <div class="px-4 flex flex-col">
        <h2 class="text-center block mb-2 font-title text-xl font-bold">
          Equipamentos
        </h2>
        <button class="btn">ADICIONAR</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
