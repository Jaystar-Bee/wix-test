<script setup>
import { computed, ref } from "vue";
import PreviewCover from "./../components/PreviewCover.vue";
import { useGeneralStore } from "./../stores";

const generalStore = useGeneralStore();

const currentPage = ref("ABOUT")
const components = computed(() => {
    // generalStore.data
    const data = generalStore.data
    const page = data?.pages?.find(page => page?.name === currentPage.value)
    const header = data?.header
    const footer = data?.footer
    if (page?.haveHeader) {
        page?.sections.unshift(header)
    }
    if (page?.haveFooter) {
        page?.sections.push(footer)
    }
    return page?.sections

});
</script>

<template>
    <div>
        <div v-if="components?.length">
            <section v-for="(comp, index) in components" :key="comp?.name" class="section">
                <PreviewCover :comp="comp" :index="index" />
            </section>
        </div>
        <div v-else class="min-h-[calc(100dvh-56px)] flex justify-center items-center">
            <p>There is no Data</p>
        </div>
    </div>
</template>
