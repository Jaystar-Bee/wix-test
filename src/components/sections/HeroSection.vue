<script setup>
import { FormType } from "./../../types/enums";
import { inject } from "vue";
import useColor from "../../composables/useColor";

const props = defineProps({
  data: Object,
  index: Number,
});
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
  <div @click="setForm($event, 'bgImage', FormType.FILE, data?.bgImage)"
    :style="{ backgroundImage: `url(${data?.bgImage?.src})` }" class="py-20 px-10 bg-cover min-h-[70dvh] relative">
    <div class="w-[40%] absolute top-1/3 -translate-y-1/3 left-10 ">
      <h2 @click="setForm($event, 'title', FormType.TEXT, data?.title)" v-if="data?.title?.text"
        :style="{ color: useColor(data?.title?.color) }" class="text-3xl">
        {{ data?.title?.text }}
      </h2>
      <p @click="
        setForm(
          $event,
          'description',
          FormType.DESCRIPTION,
          data?.description
        )
        " v-if="data?.description?.text" :style="{ color: useColor(data?.description?.color) }" class="pt-6">
        {{ data?.description?.text }}
      </p>
      <button v-if="data?.button && data?.button?.text"
        @click="setForm($event, 'button', FormType.BUTTON, data?.button)"
        class="border-none outline-none px-10 py-2 mt-10" :style="{
          backgroundColor: useColor(data?.button?.bgColor) || '#000000',
          color: useColor(data?.button?.color) || '#ffffff',
        }">
        {{ data?.button.text }}
      </button>
    </div>
  </div>
</template>
