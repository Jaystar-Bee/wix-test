<script setup>
const props = defineProps({
  data: Object,
  index: Number,
});
</script>

<template>
  <div class="py-20 pb-40 px-10">
    <div class="mb-6 px-2">
      <h2
        v-if="data?.title?.text"
        class="text-2xl font-semibold"
        :style="{
          color: data?.title?.color,
        }"
      >
        {{ data?.title?.text }}
      </h2>
    </div>
    <ul
      class="flex items-stretch gap-5 overflow-x-auto py-4 px-2"
      :class="{
        '': data?.cards?.length > 1,
      }"
    >
      <li v-for="card in data?.cards" :key="card?.title" class="relative">
        <div
          v-if="card?.bgImage || card?.button?.text"
          class="shadow-md rounded-lg min-w-[17rem] w-[17rem] relative aspect-[5/6] overflow-hidden"
        >
          <img
            :src="card?.bgImage"
            alt=""
            class="w-full h-full object-cover hover:scale-[105%] transition-all"
          />
          <div
            v-if="card?.button?.text"
            class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-1.5 text-xs"
            :style="{
              background: card?.button?.bgColor,
            }"
          >
            <p
              :style="{
                color: card?.button?.color,
              }"
            >
              {{ card?.button?.text }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
