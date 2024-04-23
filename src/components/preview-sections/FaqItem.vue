<script setup>
import { ref } from "vue"
import { Icon } from '@iconify/vue';

const detailIsVisible = ref(false)

const props = defineProps({
    item: Object
})
</script>

<template>
    <li class="bg-white">
        <div class=" shadow-md rounded-md py-4 px-5 flex items-center justify-between"
            @click="detailIsVisible = !detailIsVisible">
            <h2>{{ item?.title?.text }}</h2>
            <Icon :icon="detailIsVisible ? 'ic:baseline-minus' : 'ic:baseline-plus'" class="text-xl" />
        </div>
        <div v-if="detailIsVisible" class="py-4 px-5">
            <p>{{ item?.description?.text }}</p>
        </div>
    </li>
</template>