<template>
<div class="paper container flex flex-col gap-6">
    <!-- <div class="grid grid-cols-6 gap-2">
        <div v-for="(value, name) in talents" :key="name" class="flex flex-col">
            <Label :title="value.label" align="center">
                <NumberInput :clamp="true" v-model="sheet.talents[name]" />
            </Label>
            <CheckboxButton v-for="(verb, key) in value.verbs" :key="key" :label="verb" v-model="sheet.verbs[key]" />
        </div>
    </div> -->
    <div class="grid xl:grid-cols-4">
        <div class="px-4 flex flex-col">
            <h2 class="text-center block mb-2 font-title text-xl font-bold">TESTE</h2>
            <button class="btn">ADICIONAR</button>
        </div>
        <div class="px-4 flex flex-col">
            <h2 class="text-center block mb-2 font-title text-xl font-bold">TESTE</h2>
            <button class="btn">ADICIONAR</button>
        </div>
        <div class="px-4 flex flex-col">
            <h2 class="text-center block mb-2 font-title text-xl font-bold">TESTE</h2>
            <button class="btn">ADICIONAR</button>
        </div>
        <div class="px-4 flex flex-col">
            <h2 class="text-center block mb-2 font-title text-xl font-bold">TESTE</h2>
            <button class="btn">ADICIONAR</button>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    talents
} from '../constants'
export default {
    data() {
        return {
            sheet: {
                talents: Object.keys(talents).reduce((t, v) => ({
                    ...t,
                    [v]: 0
                }), {}),
                verbs: Object.entries(talents).reduce((t, [k, v]) => ({
                    ...t,
                    [k]: Object.keys(v.verbs).reduce((a, b) => ({
                        ...a,
                        [b]: false
                    }), {})
                }), {})
            }
        }
    },
    computed: {
        talents() {
            return talents
        }
    }
}
</script>

<style scoped>
    
</style>
