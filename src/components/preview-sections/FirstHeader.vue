<script setup>
import { Icon } from '@iconify/vue';
import { computed } from 'vue';
import { useColorStore } from '../../stores/color';


var colorStore = useColorStore()
const props = defineProps({
  data: Object,
});

const themeColor = computed(() => {
  return colorStore.colors
})


</script>

<template>
  <header>
    <nav class="py-6 px-5 flex items-center justify-between"
      :style="{ backgroundColor: themeColor?.primary, color: themeColor?.tertiary }">
      <router-link to="/">
        <h2 v-if="data?.logo?.text">{{ data?.logo?.text }}</h2>
        <img v-else :src="data?.logo?.url" alt="LOGO" class="h-10" />
      </router-link>
      <ul class="flex items-center space-x-8">
        <li v-for="link in data?.links" :key="link?.name">
          <router-link v-if="link?.name" :to="link?.link" :style="{ color: data?.linkColor }">{{ link?.name
            }}</router-link>
        </li>
      </ul>
      <ul v-if="data?.socials?.data?.length" class="flex items-center space-x-4">
        <li v-for="link in data?.socials?.data" :key="link?.name">
          <a v-if="link?.name" :href="link?.link" :style="{ color: data?.linkColor }" class="text-xl cursor-pointer">
            <Icon :icon="link?.icon" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
