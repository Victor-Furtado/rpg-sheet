<script setup lang="ts">
import {
    talents,
    bequests,
    accomplishments
} from '@/data.json';
const {
    sheet
} = useSheet();

let overlayNum = ref(0);
const closeOverlay = () => {
    overlayNum.value = 0;
}

const removeItem = (type: 'bequests' | 'accomplishments' , id: string) => sheet.value[type] = sheet.value?.[type].filter(i => i !== id);

</script>

<template>
<div class="paper container flex flex-col gap-6">
    <div class="grid xl:grid-cols-3 2xl:grid-cols-6 gap-2">
        <div v-for="(value, name) in talents" :key="name" class="flex flex-col">
            <InputLabel :title="value.label" align="center">
                <InputNumber :clamp="true" v-model="sheet.talents[name]" />
            </InputLabel>
            <InputCheckButton v-for="(verb, key) in value.verbs" :key="key" :label="verb" v-model="sheet.verbs[key]" />
        </div>
    </div>
    <div class="grid xl:grid-cols-2 2xl:grid-cols-4">
        <div class="px-4 flex flex-col">
            <h2 class="text-center block mb-2 font-title text-xl font-bold">
                Dons
            </h2>
            <button @click="overlayNum = 1" class="btn">ADICIONAR</button>
            <Overlay :isOpen="overlayNum === 1">
                <OverlayCard title="Lista" :closeOverlay="closeOverlay">
                    <InputDescList v-model="sheet.bequests" :list="bequests" />
                </OverlayCard>
            </Overlay>
            <div v-for="bequest in sheet.bequests" class="group cursor-help inline-block relative">
                <div class="group-hover:block hidden absolute z-10 w-96 text-center bottom-full left-1/2 transform -translate-x-1/2">
                    <div class="relative mx-2">
                        <div class="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom-full">
                            {{ bequests.find(i=>i.id===bequest).desc }}
                            <svg class="absolute h-3 w-full left-0 top-full" viewBox="0 0 255 255">
                                <polygon points="0,0 127.5,127.5 255,0" /></svg>
                        </div>
                    </div>
                </div>
                <div class="w-full py-2 px-3 border border-gray-200 flex justify-between items-center">
                    <p class="uppercase font-bold">{{ bequests.find(i=>i.id===bequest).name }}</p>
                    <svg class="w-6 h-6 cursor-pointer" @click="removeItem('bequests',bequest)" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="px-4 flex flex-col">
            <h2 class="text-center block mb-2 font-title text-xl font-bold">
                Méritos
            </h2>
            <button @click="overlayNum = 2" class="btn">ADICIONAR</button>
            <Overlay :isOpen="overlayNum === 2">
                <OverlayCard title="Lista" :closeOverlay="closeOverlay">
                    <InputDescList v-model="sheet.accomplishments" :list="accomplishments" />
                </OverlayCard>
            </Overlay>
            <div v-for="accomplishment in sheet.accomplishments" class="group cursor-help inline-block relative">
                <div class="group-hover:block hidden absolute z-10 w-96 text-center bottom-full left-1/2 transform -translate-x-1/2">
                    <div class="relative mx-2">
                        <div class="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom-full">
                            {{ accomplishments.find(i=>i.id===accomplishment).desc }}
                            <svg class="absolute h-3 w-full left-0 top-full" viewBox="0 0 255 255">
                                <polygon points="0,0 127.5,127.5 255,0" /></svg>
                        </div>
                    </div>
                </div>
                <div class="w-full py-2 px-3 border border-gray-200 flex justify-between items-center">
                    <p class="uppercase font-bold">{{ accomplishments.find(i=>i.id===accomplishment).name }}</p>
                    <svg class="w-6 h-6 cursor-pointer" @click="removeItem('accomplishments',accomplishment)" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="px-4 flex flex-col">
            <h2 class="text-center block mb-2 font-title text-xl font-bold">
                Habilidades
            </h2>
            <button @click="overlayNum = 3" class="btn">ADICIONAR</button>
        </div>
        <div class="px-4 flex flex-col">
            <h2 class="text-center block mb-2 font-title text-xl font-bold">
                Equipamentos
            </h2>
            <button @click="overlayNum = 4" class="btn">ADICIONAR</button>
        </div>
    </div>
</div>
</template>

<style scoped></style>
