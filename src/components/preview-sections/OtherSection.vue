<script setup>
import { Icon } from '@iconify/vue';
import useColor from '../../composables/useColor';
const props = defineProps({
  data: Object,
  index: Number,
});
</script>

<template>
  <div class="py-20 px-10">
    <ul class="grid grid-cols-4 gap-4">
      <li v-for="(item, index) in data?.others" :key="index"
        class="flex items-start gap-3 py-10 px-4 border-r last:border-r-0">
        <Icon :icon="item?.icon" :style="{ color: useColor('secondary') }" class="text-2xl mt-[1px]" />
        <div>
          <h2 v-if="item?.title?.text" class="whitespace-nowrap text-lg font-semibold"
            :style="{ color: useColor(item?.title.color) }">
            {{ item?.title.text }}
          </h2>
          <p v-if="item?.description?.text" class="text-xs whitespace-nowrap text-gray-400 pt-2"
            :style="{ color: useColor(item?.description.color) }">
            {{ item?.description?.text }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
