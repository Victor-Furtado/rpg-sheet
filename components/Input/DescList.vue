<script setup lang="ts">
import { clamp } from '~~/functions';

interface DescListProps {
    list: {
        id: string;
        name:string;
        desc: string;
    }[];
    modelValue?: Array<string>;
}

const props = defineProps<DescListProps>();
const array = props.list.sort((a,b)=>a.name.localeCompare(b.name))

const emit = defineEmits(['update:modelValue']);

const addItem = (itemId:string) => {
    const temp = props.modelValue;
    temp.push(itemId);
    emit('update:modelValue',temp);
}

const removeItem = (itemId:string) => {
    const temp = props.modelValue?.filter(i=>i!==itemId);
    emit('update:modelValue',[...temp]);
}

const selected = ref(0);
</script>

<template>
<div class="grid grid-cols-2 gap-3">
    <div class="col-span-full flex gap-3 items-center overflow-x-scroll">
        <p class="py-2">Escolhidos:</p>
        <div v-for="item in modelValue" class="px-3 py-2 bg-secondary-500 text-white rounded-full flex items-center gap-3">
            <p>{{list.find(i=>i.id===item).name}}</p>
            <svg @click="removeItem(item)" class="w-4 h-4 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
        </div>
    </div>
    <ul class="w-full h-96 shadow-inner overflow-y-scroll">
        <li v-for="item,index in array" class="px-2 py-3 border flex justify-between items-center" :class="selected===index ? 'border-gray-400':'border-gray-100'" v-show="!modelValue?.includes(item.id)" v-on:dblclick="addItem(item.id)" @click="selected=index">
            <p>{{item.name}}</p>
            <svg @click="addItem(item.id)" class="w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
        </li>
    </ul>
    <div class="w-full h-96 shadow-inner px-2 py-3">
        <h2 class="font-bold">{{list[selected].name}}</h2>
        <p v-for="text in list[selected].desc.split('\n')">{{text}}</p>
    </div>
</div>
</template>
