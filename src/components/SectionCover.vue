<script setup>
import Header from "./sections/FirstHeader.vue";
import HeroSection from "./sections/HeroSection.vue";
import CardSection from "./sections/CardSection.vue";
import ProductSection from "./sections/ProductSection.vue";
import VideoSection from "./sections/VideoSection.vue";
import OtherSection from "./sections/OtherSection.vue";

import { computed } from "vue";
import { COMPONENTS } from "../types/enums";

const props = defineProps({
  comp: Object,
  index: Number,
});

const component = computed(() => {
  if (props?.comp?.name === COMPONENTS.HEADER) {
    return Header;
  } else if (props?.comp?.name === COMPONENTS.HERO) {
    return HeroSection;
  } else if (props.comp?.name === COMPONENTS.CARD) {
    return CardSection;
  } else if (props?.comp?.name === COMPONENTS.PRODUCT) {
    return ProductSection;
  } else if (props?.comp?.name === COMPONENTS.VIDEO) {
    return VideoSection;
  } else {
    return OtherSection;
  }
});
</script>

<template>
  <component :is="component" :data="comp" :index="index"></component>
</template>
