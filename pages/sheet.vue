<script setup lang="ts">
import {
    talents,
    knacks,
    bequests,
    accomplishments,
    savvy,
    tackles
} from '@/data.json';

const {
    exportToJsonFile,
    importFromJsonFile,
    resetSheet,
    sheet
} = useSheet();

let overlayNum = ref(0);

const closeOverlay = () => {
    overlayNum.value = 0;
}

const removeItem = (type: 'bequests' | 'accomplishments' | 'savvy' | 'tackles', id: string) => sheet[type] = sheet?.[type].filter(i => i !== id);

const teste = () => console.log({...sheet})
</script>

<template>
<div class="paper container flex flex-col gap-6">

    <div class="flex flex-col xl:flex-row items-center gap-2">

        <div class="w-1/3 h-full">
            <InputImage v-model="sheet.image" />
        </div>

        <fieldset class="w-full xl:w-2/3 px-4 flex flex-col border py-2">
            <legend class="block font-title text-xl font-bold px-3">
                Informações Básicas
            </legend>
            <div class="grid xl:grid-cols-2 gap-2">
                <InputLabel title="Nome do Personagem">
                    <input v-model="sheet.charName" class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-secondary-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Beltranode Tal" />
                </InputLabel>
                <InputLabel title="Nome do Jogador">
                    <input v-model="sheet.player" class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-secondary-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Fulano Detal" />
                </InputLabel>
                <div class="col-span-full">
                    <InputLabel title="Conceito">
                        <input v-model="sheet.concept" class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-secondary-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="''Campeão de Coliseu''" />
                    </InputLabel>
                </div>
                <div class="col-span-full">
                    <InputLabel title="Descrição do Personagem">
                        <textarea v-model="sheet.description" class="resize-none shadow appearance-none border rounded-lg w-full py-2 px-3 text-secondary-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Descreva seu personagem como numa descrição de livro" />
                    </InputLabel>
                </div>
            </div>
        </fieldset>
    </div>

    <div class="grid xl:grid-cols-3 2xl:grid-cols-6 gap-2">
        <div v-for="(value, name) in talents" :key="name" class="flex flex-col">
            <InputLabel :tooltip="value.info" :title="value.label" align="center">
                <InputNumber :clamp="true" v-model="sheet.talents[name]" />
            </InputLabel>
            <InputCheckButton v-for="(verb, key) in value.verbs" :key="key" :label="verb" v-model="sheet.verbs[key]" />
        </div>
    </div>

    <fieldset class="border px-3 pb-5 flex justify-around flex-wrap">
        <legend class="flex items-center gap-2 uppercase px-3 font-title text-xl font-bold">
            Disciplinas
            <Tooltip :text="'TEXTO DE DESCRIÇÃO DAS DISCIPLINAS'">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
            </Tooltip>
        </legend>
        <InputCheckbox v-for="(knack,i) in knacks" :key="knack" :label="knack" v-model="sheet.knacks[i]" />
    </fieldset>

    <div class="grid xl:grid-cols-2 2xl:grid-cols-4 gap-2">
        <fieldset class="px-4 flex flex-col border py-2">
            <legend class="flex items-center text-center font-title text-xl font-bold px-3">
                Dons
                <Tooltip :text="'TEXTO DE DESCRIÇÃO DOS DONS'">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
            </Tooltip>
            </legend>
            <button @click="overlayNum = 1" class="btn">ADICIONAR</button>
            <Overlay :isOpen="overlayNum === 1">
                <OverlayCard title="Lista de Dons" :closeOverlay="closeOverlay">
                    <InputDescList v-model="sheet.bequests" :list="bequests" />
                </OverlayCard>
            </Overlay>
            <div v-for="bequest in sheet.bequests">
                <div class="w-full py-2 px-3 border border-gray-200 flex justify-between items-center">
                    <p class="uppercase font-bold">{{ bequests.find(i=>i.id===bequest).name }}</p>
                    <div class="flex">
                        <Tooltip :text="bequests.find(i=>i.id===bequest).desc">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                            </svg>
                        </Tooltip>
                        <svg class="w-6 h-6 cursor-pointer" @click="removeItem('bequests',bequest)" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </fieldset>
        <fieldset class="px-4 flex flex-col border py-2">
            <legend class="flex items-center text-center font-title text-xl font-bold px-3">
                Méritos
                <Tooltip :text="'TEXTO DE DESCRIÇÃO DOS MÉRITOS'">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
            </Tooltip>
            </legend>
            <button @click="overlayNum = 2" class="btn">ADICIONAR</button>
            <Overlay :isOpen="overlayNum === 2">
                <OverlayCard title="Lista de Méritos" :closeOverlay="closeOverlay">
                    <InputDescList v-model="sheet.accomplishments" :list="accomplishments" />
                </OverlayCard>
            </Overlay>
            <div v-for="accomplishment in sheet.accomplishments">
                <div class="w-full py-2 px-3 border border-gray-200 flex justify-between items-center">
                    <p class="uppercase font-bold">{{ accomplishments.find(i=>i.id===accomplishment).name }}</p>
                    <div class="flex">
                        <Tooltip :text="accomplishments.find(i=>i.id===accomplishment).desc">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                            </svg>
                        </Tooltip>
                        <svg class="w-6 h-6 cursor-pointer" @click="removeItem('accomplishments',accomplishment)" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </fieldset>
        <fieldset class="px-4 flex flex-col border py-2">
            <legend class="flex items-center text-center font-title text-xl font-bold px-3">
                Habilidades
                <Tooltip :text="'TEXTO DE DESCRIÇÃO DAS HABILIDADES'">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
            </Tooltip>
            </legend>
            <button @click="overlayNum = 3" class="btn">ADICIONAR</button>
            <Overlay :isOpen="overlayNum === 3">
                <OverlayCard title="Lista de Habilidades" :closeOverlay="closeOverlay">
                    <InputDescList v-model="sheet.savvy" :list="savvy" />
                </OverlayCard>
            </Overlay>
            <div v-for="_savvy in sheet.savvy">
                <div class="w-full py-2 px-3 border border-gray-200 flex justify-between items-center">
                    <p class="uppercase font-bold">{{ savvy.find(i=>i.id===_savvy).name }}</p>
                    <div class="flex">
                        <Tooltip :text="savvy.find(i=>i.id===_savvy).desc">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                            </svg>
                        </Tooltip>
                        <svg class="w-6 h-6 cursor-pointer" @click="removeItem('savvy',_savvy)" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </fieldset>
        <fieldset class="px-4 flex flex-col border py-2">
            <legend class="flex items-center text-center font-title text-xl font-bold px-3">
                Equipamentos
                <Tooltip :text="'TEXTO DE DESCRIÇÃO DOS EQUIPAMENTOS'">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
            </Tooltip>
            </legend>
            <button @click="overlayNum = 4" class="btn">ADICIONAR</button>
            <Overlay :isOpen="overlayNum === 4">
                <OverlayCard title="Lista de Equipamentos" :closeOverlay="closeOverlay">
                    <InputDescList v-model="sheet.tackles" :list="tackles" />
                </OverlayCard>
            </Overlay>
            <div v-for="tackle in sheet.tackles">
                <div class="w-full py-2 px-3 border border-gray-200 flex justify-between items-center">
                    <p class="uppercase font-bold">{{ tackles.find(i=>i.id===tackle).name }}</p>
                    <div class="flex">
                        <Tooltip :text="tackles.find(i=>i.id===tackle).desc">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                            </svg>
                        </Tooltip>
                        <svg class="w-6 h-6 cursor-pointer" @click="removeItem('tackles',tackle)" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </fieldset>
    </div>

    <div class='mt-auto flex justify-evenly flex-wrap gap-2 mb-5'>
        <button class='btn-green'>
            EXPORTAR PDF
        </button>
        <label
              class='cursor-pointer w-full lg:w-52 bg-blue-500 uppercase font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600'
              for='upload'>
              CARREGAR ARQUIVO
              <input
                type='file'
                id='upload'
                class='hidden'
                @change="importFromJsonFile"
              />
            </label>
        <button type='button' class='btn-yellow' @click="exportToJsonFile">
            SALVAR ARQUIVO
        </button>
        <button type='button' @click="resetSheet" class='btn-red'>
            LIMPAR CAMPOS
        </button>
    </div>

</div>
</template>

<style scoped>
.form-btn {
    @apply w-full lg:w-52 uppercase font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out;
}

.btn-blue {
    @apply form-btn hover:bg-blue-700 bg-blue-500;
}

.btn-yellow {
    @apply form-btn hover:bg-yellow-700 bg-yellow-500;
}

.btn-green {
    @apply form-btn hover:bg-green-700 bg-green-500;
}

.btn-red {
    @apply form-btn hover:bg-red-700 bg-red-500;
}
</style>
