<script setup>
import ProductItem from "./ProductItem.vue";

const props = defineProps({
  data: Object,
});
</script>

<template>
  <div class="py-20 px-10">
    <ul class="grid grid-cols-3 gap-6 flex-wrap items-stretch">
      <ProductItem
        v-for="product in data?.products"
        :key="product?.id"
        :product="product"
      />
      <li
        class="border-2 border-dotted border-black rounded-lg flex justify-center items-center min-w-[17rem] w-[20rem] aspect-[5/6] overflow-hidden cursor-pointer"
      >
        <i class="fa fa-plus-circle text-4xl" aria-hidden="true"></i>
      </li>
    </ul>
  </div>
</template>
