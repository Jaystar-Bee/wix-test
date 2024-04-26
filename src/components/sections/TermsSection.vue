<script setup>
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import { FormType } from "../../types/enums";
import { ref, inject } from "vue"


const props = defineProps({
    data: Object,
    index: Number,
});


const setCurrentForm = inject("setCurrentDetails");
function setForm(event, key, formType, data) {
    //   event.stopPropagation();
    const formDetail = {
        data,
        sectionIndex: props?.index - 1,
        sectionName: props?.data?.name,
        cardIndex: null,
        formType,
        dataKey: key,
    };
    setCurrentForm(formDetail);
}


</script>


<template>
    <section class="pt-32 pb-40 px-20 " @click="setForm($event, null, FormType.TERMS, data)">
        <div>
            <h2 class="text-2xl font-semibold">{{ data?.title?.text }}</h2>
        </div>
        <div class="mt-12 text-gray-800 prose" v-if="data?.description?.text">
            <div v-html="data?.description?.text"></div>
        </div>
    </section>
</template>