<script setup>
import { FormType } from "./../../types/enums";
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
  <div
    @click="setForm($event, 'bgImage', FormType.FILE, data?.bgImage)"
    :style="{ backgroundImage: `url(${data?.bgImage?.src})` }"
    class="py-20 px-10 bg-cover min-h-[70dvh]"
  >
    <div class="w-[40%] mt-5">
      <h2
        @click="setForm($event, 'title', FormType.TEXT, data?.title)"
        v-if="data?.title?.text"
        :style="{ color: data?.title?.color }"
        class="text-3xl"
      >
        {{ data?.title?.text }}
      </h2>
      <p
        @click="
          setForm(
            $event,
            'description',
            FormType.DESCRIPTION,
            data?.description
          )
        "
        v-if="data?.description?.text"
        :style="{ color: data?.description?.color }"
        class="pt-2"
      >
        {{ data?.description?.text }}
      </p>
      <button
        v-if="data?.button && data?.button?.text"
        @click="setForm($event, 'button', FormType.BUTTON, data?.button)"
        class="border-none outline-none px-4 py-2 mt-6"
        :style="{
          backgroundColor: data?.button?.bgColor || '#000000',
          color: data?.button?.color || '#ffffff',
        }"
      >
        {{ data?.button.text }}
      </button>
    </div>
  </div>
</template>
