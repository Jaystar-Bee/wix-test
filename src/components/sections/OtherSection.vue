<script setup>
import { FormType } from "./../../types/enums";
import useColor from "../../composables/useColor";
import { Icon } from '@iconify/vue';

import { useGeneralStore } from "./../../stores";
import { inject } from "vue";
const props = defineProps({
  data: Object,
  index: Number,
});
const generalStore = useGeneralStore();

const setCurrentForm = inject("setCurrentDetails");
function setForm(event, key, formType, data, cardIndex) {
  event?.stopPropagation();
  const formDetail = {
    data,
    sectionIndex: props?.index,
    sectionName: props?.data?.name,
    cardIndex,
    formType,
    dataKey: key,
  };
  setCurrentForm(formDetail);
}

function deleteCard(event, cardName, index) {
  event.stopPropagation();
  const data = {
    sectionName: props?.data?.name - 1,
    sectionIndex: props?.index,
    cardName,
    index,
  };
  generalStore.deleteCard(data);
  setCurrentForm(undefined);
}
</script>

<template>
  <div class="py-20 px-10">
    <ul class="list-none grid grid-cols-3 gap-4">
      <li v-for="(item, index) in data?.others" :key="index"
        @click="setForm($event, 'others', FormType.OTHERS, item, index)"
        class="flex items-start gap-3 py-10 px-4 border-r last:border-r-0">
        <!-- <img :src="item?.image" alt="" class="w-8" /> -->
        <Icon :icon="item?.icon" :style="{ color: useColor('secondary') }" class="text-2xl mt-[1px]" />
        <div>
          <h2 v-if="item?.title?.text" class="whitespace-nowrap text-lg font-semibold"
            :style="{ color: useColor(item?.title.color) }">
            {{ item?.title.text }}
          </h2>
          <p v-if="item?.description?.text" class="text-xs whitespace-nowrap text-gray-400 pt-2"
            :style="{ color: useColor(item?.description.color) || '#000000' }">
            {{ item?.description?.text }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
