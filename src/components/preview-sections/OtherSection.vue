<script setup>
const props = defineProps({
  data: Object,
  index: Number,
});
</script>

<template>
  <div class="py-20 px-10">
    <ul class="grid grid-cols-4 gap-4">
      <li
        v-for="(item, index) in data?.others"
        :key="index"
        class="flex items-start gap-3 py-10 px-4 border-r last:border-r-0"
      >
        <img :src="item?.image" alt="" class="w-8" />
        <div class="mt-1">
          <h2
            v-if="item?.title?.text"
            class="whitespace-nowrap"
            :style="{ color: item?.title.color }"
          >
            {{ item?.title.text }}
          </h2>
          <p
            v-if="item?.description?.text"
            class="text-xs whitespace-nowrap text-gray-400 pt-2"
            :style="{ color: item?.description.color }"
          >
            {{ item?.description?.text }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
