<script setup>
import { computed } from "vue";
import PreviewCover from "./../components/PreviewCover.vue";
import { useGeneralStore } from "./../stores";

const generalStore = useGeneralStore();

const components = computed(() => generalStore.data);
</script>

<template>
  <div>
    <div v-if="components?.length">
      <section
        v-for="(comp, index) in components"
        :key="comp?.name"
        class="section"
      >
        <PreviewCover :comp="comp" :index="index" />
      </section>
    </div>
    <div
      v-else
      class="min-h-[calc(100dvh-56px)] flex justify-center items-center"
    >
      <p>There is no Data</p>
    </div>
  </div>
</template>
