<script setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <div class="py-20 px-10 bg-gray-50">
    <div>
      <div class="text-center w-[50%] mx-auto">
        <h4
          v-if="data?.sectioName?.text"
          class="uppercase font-semibold"
          :style="{ color: data?.sectioName?.color }"
        >
          {{ data?.sectioName?.text }}
        </h4>
        <h1
          v-if="data?.title?.text"
          class="text-3xl font-medium py-2"
          :style="{ color: data?.title?.color }"
        >
          {{ data?.title?.text }}
        </h1>
        <p
          v-if="data?.description?.text"
          :style="{ color: data?.description?.color }"
        >
          {{ data?.description?.text }}
        </p>
      </div>
    </div>

    <div class="w-full aspect-[16/9] relative mt-8 bg-gray-600">
      <video
        :src="data?.video?.src"
        autoplay
        loop
        class="w-full h-full object-contain"
      ></video>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <i class="fa fa-play-circle text-white text-3xl" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>
