<script setup>
import FaqItem from "./FaqItem.vue"


const props = defineProps({
    data: Object,
    index: Number,
});

</script>


<template>
    <section class="py-40 px-20 bg-gray-50">
        <div>
            <h2 class=" text-2xl font-semibold">FAQ</h2>
        </div>

        <ul class="mt-10">
            <FaqItem v-for="item in data.faqs" :key="item?.title" :item="item" class="mb-6 last:mb-0" />
        </ul>
    </section>
</template>