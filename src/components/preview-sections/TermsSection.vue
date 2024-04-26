<script setup>


const props = defineProps({
    data: Object,
    index: Number,
});

</script>


<template>
    <section class="pt-32 pb-40 px-20 ">
        <div>
            <h2 class=" text-2xl font-semibold">{{ data?.title?.text }}</h2>
        </div>
        <div class="mt-12 text-gray-800 prose" v-if="data?.description?.text">
            <div v-html="data?.description?.text"></div>
        </div>

    </section>
</template>