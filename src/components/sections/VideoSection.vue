<script setup>
import { FormType } from "./../../types/enums";
import useColor from "../../composables/useColor";
import { inject } from "vue";

const props = defineProps({
  data: Object,
  index: Number,
});
const setCurrentForm = inject("setCurrentDetails");
function setForm(event, key, formType, data) {
  event.stopPropagation();
  const formDetail = {
    data,
    sectionIndex: props?.index - 1,
    sectionName: props?.data?.name,
    cardIndex: null,
    formType,
    dataKey: key,
  };
  setCurrentForm(formDetail);
}
</script>

<template>
  <div class="py-20 px-10 bg-gray-50">
    <div>
      <div class="text-center w-[50%] mx-auto">
        <h4 v-if="data?.sectionName?.text" @click="
          setForm($event, 'sectionName', FormType.TEXT, data?.sectionName)
          " class="uppercase font-semibold" :style="{ color: useColor(data?.sectionName?.color) }">
          {{ data?.sectionName?.text }}
        </h4>
        <h1 v-if="data?.title?.text" @click="setForm($event, 'title', FormType.TEXT, data?.title)"
          class="text-3xl font-medium py-2" :style="{ color: useColor(data?.title?.color) }">
          {{ data?.title?.text }}
        </h1>
        <p v-if="data?.description?.text" @click="
          setForm(
            $event,
            'description',
            FormType.DESCRIPTION,
            data?.description
          )
          " :style="{ color: useColor(data?.description?.color) || '#000000', }">
          {{ data?.description?.text }}
        </p>
      </div>
    </div>

    <div class="w-full aspect-[16/9] relative mt-8 bg-gray-600">
      <video :src="data?.video?.src" @click="setForm($event, 'video', FormType.FILE, data?.video)" autoplay loop
        class="w-full h-full object-contain"></video>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <i class="fa fa-play-circle text-white text-3xl" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>
