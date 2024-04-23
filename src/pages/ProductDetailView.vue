<script setup>
import FirstHeader from "./../components/preview-sections/FirstHeader.vue"
import TheFooter from "./../components/preview-sections/TheFooter.vue"


import { computed } from "vue"
import { useGeneralStore } from '../stores';

const generalStore = useGeneralStore()

const headerDetail = computed(() => generalStore.getHeader)

const footerDetail = computed(() => generalStore.getFooter)

</script>

<template>
    <first-header :data="headerDetail" :index="1" />
    <main>

    </main>

    <the-footer :data="footerDetail" :index="3" />
</template>