<script setup>
import FirstHeader from "./../components/preview-sections/FirstHeader.vue"
import TheFooter from "./../components/preview-sections/TheFooter.vue"
import ProductCard from "./../components/preview-sections/ProductCard.vue"


import { useRoute } from "vue-router"
import { computed, onMounted, watch } from "vue"
import { useProductStore } from "../stores/product"
import { useCartStore } from "../stores/cart"
import { useGeneralStore } from '../stores';
import useColor from "../composables/useColor"

const route = useRoute()
const productStore = useProductStore()
const cartStore = useCartStore()
const generalStore = useGeneralStore()
const headerDetail = computed(() => generalStore.getHeader)
const footerDetail = computed(() => generalStore.getFooter)

const product = computed(() => {
    return productStore.products?.find(product => product?.id == route?.params.id)
})
const products = computed(() => productStore.products)

watch(route, (val) => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

})

</script>

<template>
    <first-header :data="headerDetail" :index="1" />
    <main>
        <section class="py-40 px-20">

            <div v-if="product" class="flex">
                <div class="flex-1">
                    <div class="w-[80%]">
                        <img :src="product?.image" alt="">
                    </div>
                </div>
                <div class="flex-1 mt-10">
                    <h2 class="text-4xl font-bold">{{ product?.name }}</h2>
                    <p class="text-green-800 pt-2 text-2xl">&#x24; {{ product?.price?.toLocaleString() }}</p>
                    <p class="pt-10 leading-8">{{ product?.description }}</p>

                    <button
                        class="px-10 py-3 mt-6 text-sm hover:opacity-90 text-white rounded-full border-none outline-none duration-300"
                        :style="{ background: useColor('primary') }" @click="cartStore.addToCart(product)">Add
                        to Cart</button>
                </div>
            </div>
            <div v-else class=" text-center">
                <h2 class="text-4xl font-bold pb-4">No product found!</h2>
                <p class="w-[40%] mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat mollitia
                    et dolores iste quae
                    cumque illo delectus qui ipsa impedit, itaque eligendi corrupti placeat id incidunt alias optio.
                    Eveniet, corrupti!</p>
            </div>
        </section>
        <section class="bg-gray-100 pt-20 pb-40 px-20">

            <div>
                <h2 class="text-2xl font-semibold">Related Products</h2>
                <ul class="mt-10 flex flex-wrap gap-14">
                    <product-card v-for="product in products?.slice(0, 5)" :key="product?.name" :product="product" />
                </ul>
            </div>
        </section>
    </main>

    <the-footer :data="footerDetail" :index="3" />
</template>