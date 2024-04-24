<script setup>
import ProductItem from "./ProductItem.vue";
import { FormType } from "./../../types/enums";
import { useGeneralStore } from "./../../stores";
import { inject } from "vue";

const generalStore = useGeneralStore();
const props = defineProps({
  data: Object,
  index: Number,
  currentPage: String
});

const setCurrentForm = inject("setCurrentDetails");
function setForm(event, key, formType, data, cardIndex) {
  event?.stopPropagation();
  const formDetail = {
    data,
    sectionIndex: props?.index,
    sectionName: props?.data?.name,
    cardIndex,
    formType,
    dataKey: key,
  };
  setCurrentForm(formDetail);
}

function deleteCard(event, cardName, index) {
  event.stopPropagation();
  const data = {
    sectionName: props?.data?.name,
    sectionIndex: props?.index,
    cardName,
    index,
  };
  generalStore.deleteCard(data, props.currentPage);
  setCurrentForm(undefined);
}
function addCard(cardName) {
  const formData = {
    id: null,
  };
  const data = {
    sectionName: props?.data?.name,
    cardName,
    sectionIndex: props?.index - 1,
    formData,
  };
  generalStore.addToCard(data, props.currentPage);
  setForm(
    undefined,
    cardName,
    FormType.PRODUCT,
    formData,
    props.data?.products?.length - 1
  );
}
</script>

<template>
  <div class="py-20 px-10">
    <ul class="grid grid-cols-3 gap-6 flex-wrap items-stretch">
      <li v-for="(product, index) in data?.products" :key="product?.id" class="relative">
        <ProductItem :product="product" @click="setForm($event, 'products', FormType.PRODUCT, product, index)" />
        <div class="absolute -top-2 -right-2 text-red-500 text-xl">
          <i class="fa fa-times-circle cursor-pointer" aria-hidden="true"
            @click="deleteCard($event, 'products', index)"></i>
        </div>
      </li>
      <li @click="addCard('products')"
        class="border-2 border-dotted border-black rounded-lg flex justify-center items-center min-w-[17rem] w-[20rem] aspect-[5/6] overflow-hidden cursor-pointer">
        <i class="fa fa-plus-circle text-4xl" aria-hidden="true"></i>
      </li>
    </ul>
  </div>
</template>
