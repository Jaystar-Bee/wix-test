<script setup>
import { computed, ref } from "vue";
import PreviewCover from "./../components/PreviewCover.vue";
import { useGeneralStore } from "./../stores";
import { COMPONENTS } from "../types/enums";

const generalStore = useGeneralStore();

const currentPage = ref("HOME")
const components = computed(() => {
  // generalStore.data
  const data = generalStore.data
  const page = JSON.parse(JSON.stringify(data?.pages?.find(page => page?.name === currentPage.value)))

  const header = data?.header
  const footer = data?.footer

  if (page?.sections[0]?.name !== COMPONENTS.HEADER) {
    if (page?.haveHeader) {
      page?.sections.unshift(header)
    }
  }
  if (page?.sections[0]?.name !== COMPONENTS.FOOTER) {
    if (page?.haveFooter) {
      page?.sections.push(footer)
    }
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
