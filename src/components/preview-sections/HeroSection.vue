<script setup>
import useColor from "../../composables/useColor";

const props = defineProps({
  data: Object,
  index: Number,
});
</script>

<template>
  <div :style="{ backgroundImage: `url(${data?.bgImage?.src})` }" class="py-20 px-10 bg-cover min-h-[92dvh] relative">
    <div class="w-[40%] mt-10 absolute top-1/3 -translate-y-1/2 left-10">
      <h2 v-if="data?.title?.text" :style="{ color: useColor(data?.title?.color) }" class="text-5xl">
        {{ data?.title?.text }}
      </h2>
      <p v-if="data?.description?.text" :style="{ color: useColor(data?.description?.color) }" class="pt-8">
        {{ data?.description?.text }}
      </p>
      <button v-if="data?.button && data?.button?.text" class="border-none outline-none px-10 py-2 mt-6" :style="{
        backgroundColor: useColor(data?.button?.bgColor) || '#000000',
        color: useColor(data?.button?.color) || '#ffffff',
      }">
        {{ data?.button.text }}
      </button>
    </div>
  </div>
</template>
