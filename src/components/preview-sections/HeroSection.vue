<script setup>
const props = defineProps({
  data: Object,
  index: Number,
});
</script>

<template>
  <div
    :style="{ backgroundImage: `url(${data?.bgImage?.src})` }"
    class="py-20 px-10 bg-cover min-h-[94dvh]"
  >
    <div class="w-[40%] mt-10">
      <h2
        v-if="data?.title?.text"
        :style="{ color: data?.title?.color }"
        class="text-5xl"
      >
        {{ data?.title?.text }}
      </h2>
      <p
        v-if="data?.description?.text"
        :style="{ color: data?.description?.color }"
        class="pt-5"
      >
        {{ data?.description?.text }}
      </p>
      <button
        v-if="data?.button && data?.button?.text"
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
