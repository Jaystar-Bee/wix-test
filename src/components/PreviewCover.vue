<script setup>
import Header from "./preview-sections/FirstHeader.vue";
import HeroSection from "./preview-sections/HeroSection.vue";
import CardSection from "./preview-sections/CardSection.vue";
import ProductSection from "./preview-sections/ProductSection.vue";
import VideoSection from "./preview-sections/VideoSection.vue";
import OtherSection from "./preview-sections/OtherSection.vue";
import TheFooter from "./preview-sections/TheFooter.vue";
import FAQSection from "./preview-sections/FAQSection.vue"
import TermsSection from "./preview-sections/TermsSection.vue"



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
  } else if (props?.comp?.name === COMPONENTS.FOOTER) {
    return TheFooter;
  } else if (props?.comp?.name === COMPONENTS.FAQ) {
    return FAQSection;
  } else if (props?.comp?.name === COMPONENTS.TERMS) {
    return TermsSection;
  } else {
    return OtherSection;
  }
});
</script>

<template>
  <component :is="component" :data="comp" :index="index"></component>
</template>
