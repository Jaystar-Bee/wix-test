<script setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <header>
    <nav
      class="py-4 px-5 flex items-center justify-between"
      :style="{ backgroundColor: data?.bgColor, color: data?.textColor }"
    >
      <router-link to="/">
        <h2 v-if="data?.logo">{{ data?.logo }}</h2>
      </router-link>
      <ul class="flex items-center space-x-8">
        <li v-for="link in data?.links" :key="link?.name">
          <a
            v-if="link?.name"
            :href="link?.link"
            :style="{ color: data?.linkColor }"
            >{{ link?.name }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
