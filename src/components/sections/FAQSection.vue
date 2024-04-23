<script setup>
import FaqItem from "./FaqItem.vue"
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
    <section class="pt-32 pb-40 px-20 bg-gray-50" @click="setForm($event, null, FormType.FAQ, data)">
        <div>
            <h2 class="text-2xl font-semibold">FAQ</h2>
        </div>

        <ul class="mt-20">
            <FaqItem v-for="item in data.faqs" :key="item?.title" :item="item" class="mb-6 last:mb-0" />
        </ul>
    </section>
</template>