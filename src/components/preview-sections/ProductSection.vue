<script setup>
import ProductItem from "./ProductItem.vue";

const props = defineProps({
  data: Object,
  index: Number,
});
</script>

<template>
  <div class="py-40 px-10">
    <div class="w-fit mx-auto">
      <ul class="grid grid-cols-3 gap-6">
        <li v-for="product in data?.products" :key="product?.id" class="relative">
          <ProductItem :product="product" />
        </li>
      </ul>
    </div>
  </div>
</template>
