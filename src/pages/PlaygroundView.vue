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

import { ref, shallowRef, onMounted, computed, provide } from "vue";
import { useGeneralStore } from "./../stores";
import { FormType } from "../types/enums";

const generalStore = useGeneralStore();

const currentDetails = ref();
function setCurrentDetails(data) {
  currentDetails.value = data;
}

provide("setCurrentDetails", setCurrentDetails);

const components = computed(() => generalStore.data);

function deleteSection(index) {
  generalStore.deleteSection(index);
}

function updateCurrentData(value) {
  currentDetails.value.data = value;
  generalStore.setData(currentDetails.value);
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
  } else {
    return null;
  }
});
</script>

<template>
  <div class="flex">
    <div class="w-[70%] border-r">
      <div class="py-4 px-5">
        <router-link to="/test" class="text-white bg-black px-4 py-2 rounded-md"
          >Prevew</router-link
        >
      </div>
      <div class="max-h-[calc(100dvh-56px)] overflow-y-auto">
        <div v-if="components?.length">
          <section
            v-for="(comp, index) in components"
            :key="comp?.name"
            class="relative section"
          >
            <SectionCover :comp="comp" :index="index" />
            <div
              class="absolute top-0 right-0 settings w-max h-max overflow-visible hidden"
            >
              <div class="absolute top-1 right-1 flex gap-4">
                <popover :name="comp?.name" :index="index" isTop />
                <popover :name="comp?.name" :index="index" />
                <button
                  @click="deleteSection(index)"
                  class="bg-red-500 text-white rounded-lg px-4 text-xs py-1"
                >
                  Delete
                </button>
              </div>
            </div>
          </section>
        </div>
        <div
          v-else
          class="min-h-[calc(100dvh-56px)] flex justify-center items-center"
        >
          <popover isAdd />
        </div>
      </div>
    </div>
    <div class="w-[30%] px-4 max-h-[100dvh] overflow-y-auto py-10">
      <h2 class="text-center text-2xl pb-6">Design Section</h2>
      <div v-if="currentForm">
        <component
          :is="currentForm"
          :data="currentDetails?.data"
          @updateData="updateCurrentData"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section:hover .settings {
  display: block;
}
</style>
