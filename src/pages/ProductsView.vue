<script setup>
import FirstHeader from "./../components/preview-sections/FirstHeader.vue"
import TheFooter from "./../components/preview-sections/TheFooter.vue"
import ProductCard from "./../components/preview-sections/ProductCard.vue"

import { useProductStore } from "./../stores/product"
import { computed } from "vue"
import { useGeneralStore } from '../stores';

const generalStore = useGeneralStore()
const productStore = useProductStore()

const headerDetail = computed(() => generalStore.getHeader)
const footerDetail = computed(() => generalStore.getFooter)
const products = computed(() => productStore.products)

</script>

<template>
    <first-header :data="headerDetail" :index="1" />
    <main class="bg-gray-50 py-40 ">
        <ul class="list-none flex flex-wrap justify-center gap-10">
            <product-card v-for="product in products" :key="product?.name" :product="product" />
        </ul>
    </main>

    <the-footer :data="footerDetail" :index="3" />
</template>