<script setup>
import { useProductStore } from "../../stores/product.ts"
import { computed } from "vue"

const productStore = useProductStore()
const props = defineProps({
    cart: Object
})

const cartProduct = computed(() => {
    return productStore.products?.find(prod => prod?.id === props?.cart?.product_id)
})

</script>

<template>
    <li class="rounded-lg overflow-hidden bg-white flex justify-between gap-4 shadow-md w-fit pr-4 min-w-[16rem]">
        <div class="h-[8rem] w-20 bg-gray-300">
            <img :src="cartProduct?.image" alt="" class="h-full w-full object-cover">
        </div>
        <div class="flex flex-col justify-between py-2">

            <h2 class="text-xl font-bold truncate">{{ cartProduct?.name }}</h2>
            <div class="flex items-center justify-between">
                <p>&#x24;{{ (cartProduct?.price)?.toLocaleString() }}</p>
                <p class=" text-green-700 text-right text-sm font-bold">x {{ cart?.quantity }}</p>
            </div>
        </div>
    </li>

</template>