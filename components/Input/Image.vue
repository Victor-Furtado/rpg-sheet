<script setup lang="ts">
interface CheckboxProps {
    modelValue?: string;
}

const props = defineProps<CheckboxProps>();

const emit = defineEmits(['update:modelValue']);

const onSelectFile = ({target}) => {
        const reader = new FileReader
        reader.readAsDataURL(target.files[0])
        reader.onloadend = e => {
          emit('update:modelValue', e.target.result);
      }
    }

</script>

<template>
<div class="h-full border-4 border-dashed hover:bg-gray-100 hover:border-gray-300 text-gray-400 group-hover:text-gray-600">
    <label :style="{ 'background-image': `url(${modelValue||''})` }" class="bg-cover bg-center h-full flex flex-col items-center cursor-pointer justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" :class="!!modelValue && 'hidden'" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
        </svg>
        <p class="pt-1 text-sm tracking-wider" :class="!!modelValue && 'hidden'">Imagem do Personagem</p>
        <p class="pt-1 text-sm tracking-wider" :class="!!modelValue && 'hidden'">(jpg,png,jpeg)</p>
        <input @change="onSelectFile" type="file" class="opacity-0" />
    </label>
</div>
</template>
