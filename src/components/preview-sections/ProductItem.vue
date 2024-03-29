<script setup>
import { useProductStore } from "./../../stores/product";
import { computed } from "vue";

const productStore = useProductStore();

const props = defineProps({
  product: Object,
});
const actualProduct = computed(() => {
  return productStore.products?.find((prod) => prod?.id === props?.product?.id);
});
</script>

<template>
  <div v-if="actualProduct?.image">
    <div v-if="actualProduct?.name">
      <div class="aspect-[6/8] bg-gray-200">
        <img
          :src="actualProduct?.image"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div class="text-center font-semibold mt-2">
        <p>{{ actualProduct?.name }}</p>
        <p>
          {{
            actualProduct?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          }}
        </p>
      </div>
    </div>
    <div
      v-else
      class="aspect-[6/8] bg-gray-200 flex items-center justify-center"
    >
      <p>No product found</p>
    </div>
  </div>
</template>
