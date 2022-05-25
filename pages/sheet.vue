<template>
<div>
    <div class="grid grid-cols-6 gap-2">
        <div v-for="(value, name) in talents" :key="name" class="flex flex-col">
            <Label :title="value.label" align="center">
                <NumberInput :clamp="true" v-model="sheet.talents[name]" />
            </Label>
            <CheckboxButton v-for="(verb, key) in value.verbs" :key="key" :label="verb" v-model="sheet.verbs[key]"/>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    talents
} from '../constants/talents'
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
