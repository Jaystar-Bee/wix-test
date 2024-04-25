<script setup>
import useColor from '../../composables/useColor';
import { useCartStore } from "../../stores/cart"

const cartStore = useCartStore()
const props = defineProps({
    product: Object
})


function truncate(str, n) {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
}

</script>

<template>
    <li class="bg-white rounded-lg overflow-hidden max-w-[20rem]">
        <div class="w-[20rem] h-[20rem]">
            <img :src="product?.image" alt="image" class="h-full w-full object-cover">
        </div>
        <div class="py-5 px-3 flex flex-col justify-between">
            <div>

                <h2 class="text-xl font-bold">{{ product?.name }}</h2>
                <p class="text-green-800 pb-3">&#x24;{{ product?.price?.toLocaleString() }}</p>
                <p>{{ truncate(product?.description, 45) }}</p>
            </div>
            <div class="mt-5 flex items-center gap-2">
                <router-link :to="`/products/${product?.id}`"
                    class="flex-1 bg-orange-900 text-sm text-white outline-none border-none rounded-full text-center py-2 hover:bg-orange-800 duration-300">View</router-link>
                <button
                    class="flex-1 text-white text-sm outline-none border-none rounded-full py-2 hover:opacity-90 duration-300"
                    :style="{ background: useColor('primary') }" @click="cartStore?.addToCart(product)">Add
                    to cart</button>
            </div>
        </div>
    </li>
</template>