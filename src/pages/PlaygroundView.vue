<script setup>
import SectionCover from "./../components/SectionCover.vue";
import TextForm from "./../components/forms/TextForm.vue";
import ProductForm from "./../components/forms/ProductForm.vue";
import FileForm from "./../components/forms/FileForm.vue";
import ButtonForm from "./../components/forms/ButtonForm.vue";
import DescriptionForm from "./../components/forms/DescriptionForm.vue";
import popover from "./../components/popover.vue";
import CardForm from "./../components/forms/CardForm.vue";
import HeaderForm from "./../components/forms/HeaderForm.vue";
import OthersForm from "./../components/forms/OthersForm.vue";
import ColorForm from "./../components/forms/ColorForm.vue"
import FooterForm from "./../components/forms/FooterForm.vue"
import FAQForm from "../components/forms/FAQForm.vue";
import TermsForm from "../components/forms/TermForm.vue"

import { ref, shallowRef, onMounted, computed, provide } from "vue";
import { useGeneralStore } from "./../stores";
import { FormType } from "../types/enums";

const generalStore = useGeneralStore();

const currentDetails = ref();
function setCurrentDetails(data) {
  currentDetails.value = data;
}

const editablePages = ref([
  {
    name: "Home",
    value: "HOME"
  },
  {
    name: "About",
    value: "ABOUT"
  },
])

provide("setCurrentDetails", setCurrentDetails);

const currentPage = ref("HOME")
const components = computed(() => {
  // generalStore.data
  const data = generalStore.data
  const page = JSON.parse(JSON.stringify(data?.pages?.find(page => page?.name === currentPage.value)))

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

function deleteSection(index) {
  generalStore.deleteSection(index);
}


function updateCurrentData(value) {
  currentDetails.value.data = value;
  generalStore.setData(currentDetails.value, currentPage.value);
}

const currentForm = computed(() => {
  if (
    currentDetails.value &&
    currentDetails.value?.formType === FormType.TEXT
  ) {
    return TextForm;
  } else if (
    currentDetails.value &&
    currentDetails.value?.formType === FormType.BUTTON
  ) {
    return ButtonForm;
  } else if (
    currentDetails.value &&
    currentDetails.value?.formType === FormType.FILE
  ) {
    return FileForm;
  } else if (
    currentDetails.value &&
    currentDetails.value?.formType === FormType.PRODUCT
  ) {
    return ProductForm;
  } else if (
    currentDetails.value &&
    currentDetails.value?.formType === FormType.DESCRIPTION
  ) {
    return DescriptionForm;
  } else if (
    currentDetails.value &&
    currentDetails.value?.formType === FormType.CARD
  ) {
    return CardForm;
  } else if (
    currentDetails.value &&
    currentDetails.value?.formType === FormType.OTHERS
  ) {
    return OthersForm;
  } else if (
    currentDetails.value &&
    currentDetails.value?.formType === FormType.HEADER
  ) {
    return HeaderForm;
  } else if (
    currentDetails.value &&
    currentDetails.value?.formType === FormType.FOOTER
  ) {
    return FooterForm;
  } else if (
    currentDetails.value &&
    currentDetails.value?.formType === FormType.FAQ
  ) {
    return FAQForm;
  } else if (
    currentDetails.value &&
    currentDetails.value?.formType === FormType.TERMS
  ) {
    return TermsForm;
  } else {
    return null;
  }
});
</script>

<template>
  <div class="flex">
    <div class="w-[70%] border-r">
      <div class="py-4 px-5">
        <router-link to="/" class="text-white bg-black px-4 py-2 rounded-md">Prevew</router-link>
      </div>
      <div class="max-h-[calc(100dvh-56px)] overflow-y-auto">
        <div v-if="components?.length">
          <section v-for="(comp, index) in components" :key="comp?.name" class="relative section">
            <SectionCover :comp="comp" :index="index" :currentPage="currentPage" />
          </section>
        </div>
        <div v-else class="min-h-[calc(100dvh-56px)] flex justify-center items-center">
          <popover isAdd />
        </div>
      </div>
    </div>
    <div class="w-[30%] px-4 max-h-[100dvh] overflow-y-auto py-10">
      <h2 class="text-center text-2xl pb-6">Design Section</h2>
      <ul class="mt-10 mb-4 flex justify-between text-lg">
        <li v-for="page in editablePages" :key="page?.name" class="cursor-pointer border-b" :class="{
          'text-green-700 border-green-700': page?.value === currentPage,
          'border-b-transparent': page?.value !== currentPage
        }" @click="currentPage = page?.value">
          <p>{{ page?.name }}</p>
        </li>
      </ul>
      <hr>
      <div class="mt-6 mb-2">
        <ColorForm />
      </div>
      <hr>
      <div v-if="currentForm" class="mt-6">
        <component :is="currentForm" :data="currentDetails?.data" @updateData="updateCurrentData" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section:hover .settings {
  display: block;
}
</style>
