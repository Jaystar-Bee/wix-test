<script setup>
import FirstHeader from "./../components/preview-sections/FirstHeader.vue"
import TheFooter from "./../components/preview-sections/TheFooter.vue"
import ProductCard from "./../components/preview-sections/ProductCard.vue"
import CartCard from "./../components/preview-sections/CartCard.vue"

import { useProductStore } from "./../stores/product"
import { useCartStore } from "../stores/cart"
import { computed } from "vue"
import { useGeneralStore } from '../stores';

const generalStore = useGeneralStore()
const productStore = useProductStore()
const cartStore = useCartStore()

const headerDetail = computed(() => generalStore.getHeader)
const footerDetail = computed(() => generalStore.getFooter)
const products = computed(() => productStore.products)
const carts = computed(() => cartStore.carts)

</script>

<template>
    <first-header :data="headerDetail" :index="1" />
    <main class="">
        <section class="py-40 px-20">
            <div v-if="carts?.length">
                <ul class="flex flex-wrap gap-10">
                    <cart-card v-for="item in carts" :key="item?.product_id" :cart="item" />
                </ul>
            </div>

            <div v-else class="text-center">
                <h2 class="text-4xl font-bold pb-4">You cart is empty!</h2>
                <p class="w-[40%] mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat mollitia
                    et dolores iste quae
                    cumque illo delectus qui ipsa impedit, itaque eligendi corrupti placeat id incidunt alias optio.
                    Eveniet, corrupti!</p>
            </div>
        </section>
        <section class="py-20 bg-gray-50 px-20">
            <h2 class="text-2xl font-semibold">Related Products</h2>
            <ul class="mt-6 flex flex-wrap gap-14">
                <product-card v-for="product in products?.slice(4, 8)" :key="product?.name" :product="product" />
            </ul>
        </section>

    </main>

    <the-footer :data="footerDetail" :index="3" />
</template>