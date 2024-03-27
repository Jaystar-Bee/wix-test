<script setup>
import Header from "./../components/FirstHeader.vue";
import HeroSection from "./../components/HeroSection.vue";
import CardSection from "./../components/CardSection.vue";

import { onMounted, computed } from "vue";
import { useGeneralStore } from "./../stores";

const generalStore = useGeneralStore();

const data = computed(() => generalStore?.data);
</script>

<template>
  <div v-if="data">
    <Header
      title="click to edit"
      :data="data?.header"
      @click="currentForm = HeaderForm"
    />
    <HeroSection
      title="click to edit"
      :data="data?.hero"
      @click="currentForm = HeroForm"
    />
    <CardSection
      title="click to edit"
      :data="data?.card"
      @click="currentForm = CardForm"
    />
  </div>
  <div v-else class="h-full w-full flex items-center justify-center">
    <div>
      <h1 class="text-4xl">No Data</h1>
      <h2>Please do not refesh Again</h2>
    </div>
  </div>
</template>
