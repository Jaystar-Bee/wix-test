<script setup>
import ProductItem from "./ProductItem.vue";

const props = defineProps({
  data: Object,
  index: Number,
});
</script>

<template>
  <div class="py-20 px-10">
    <ul class="grid grid-cols-3 gap-6 flex-wrap items-stretch">
      <li v-for="product in data?.products" :key="product?.id" class="relative">
        <ProductItem :product="product" />
      </li>
    </ul>
  </div>
</template>
