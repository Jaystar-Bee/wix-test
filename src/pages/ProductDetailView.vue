<script setup>
import FirstHeader from "./../components/preview-sections/FirstHeader.vue"
import TheFooter from "./../components/preview-sections/TheFooter.vue"
import ProductCard from "./../components/preview-sections/ProductCard.vue"


import { useRoute } from "vue-router"
import { computed, onMounted } from "vue"
import { useProductStore } from "../stores/product"
import { useGeneralStore } from '../stores';

const route = useRoute()
const productStore = useProductStore()
const generalStore = useGeneralStore()
const headerDetail = computed(() => generalStore.getHeader)
const footerDetail = computed(() => generalStore.getFooter)

const product = computed(() => {
    return productStore.products?.find(product => product?.id == route?.params.id)
})
const products = computed(() => productStore.products)

onMounted(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
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
                        class="px-10 py-3 mt-6 bg-green-900 hover:bg-green-700 text-white rounded-full border-none outline-none duration-300">Add
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