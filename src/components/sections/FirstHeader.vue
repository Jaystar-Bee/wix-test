<script setup>
import { FormType } from "./../../types/enums";
import { Icon } from '@iconify/vue';
import { useColorStore } from "../../stores/color";
import { inject, computed } from "vue";

const colorStore = useColorStore()

const props = defineProps({
  data: Object,
  index: Number,
});

const themeColor = computed(() => {
  return colorStore.colors
})

const setCurrentForm = inject("setCurrentDetails");
function setForm(event, key, formType, data) {
  event.stopPropagation();
  const formDetail = {
    data,
    sectionIndex: props?.index,
    sectionName: props?.data?.name,
    cardIndex: null,
    formType,
    dataKey: key,
  };
  setCurrentForm(formDetail);
}
</script>

<template>
  <header>
    <nav @click="setForm($event, null, FormType.HEADER, data)" class="py-6 px-5 flex items-center justify-between"
      :style="{ backgroundColor: themeColor.primary, color: themeColor?.tertiary }">
      <router-link to="/">
        <h2 v-if="data?.logo?.text">{{ data?.logo?.text }}</h2>
        <img v-else :src="data?.logo?.url" alt="LOGO" class="h-10" />
      </router-link>
      <ul class="flex items-center space-x-8 pointer-events-none">
        <li v-for="link in data?.links" :key="link?.name">
          <a v-if="link?.name" :href="link?.link" :style="{ color: data?.linkColor }">{{ link?.name }}</a>
        </li>
      </ul>

      <ul v-if="data?.socials?.data?.length" class="flex items-center space-x-4 pointer-events-none">
        <li v-for="link in data?.socials?.data" :key="link?.name">
          <a v-if="link?.name" :href="link?.link" :style="{ color: data?.linkColor }" class="text-xl">
            <Icon :icon="link?.icon" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
