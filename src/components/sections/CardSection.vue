<script setup>
import { FormType } from "./../../types/enums";
import { useGeneralStore } from "./../../stores";
import useColor from "../../composables/useColor";
import { inject } from "vue";
const props = defineProps({
  data: Object,
  index: Number,
  currentPage: String
});
const generalStore = useGeneralStore();

const setCurrentForm = inject("setCurrentDetails");
function setForm(event, key, formType, data, cardIndex) {
  event?.stopPropagation();
  const formDetail = {
    data,
    sectionIndex: props?.index - 1,
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
    sectionName: props?.data?.name,
    sectionIndex: props?.index - 1,
    cardName,
    index,
  };
  generalStore.deleteCard(data, props.currentPage);
  setCurrentForm(undefined);
}
function addCard() {
  const formData = {
    button: {
      text: "",
      color: "primary",
      bgColor: "tertiary",
    },
    bgImage: "",
  };
  const data = {
    sectionName: props?.data?.name,
    cardName: "cards",
    sectionIndex: props?.index - 1,
    formData,
  };
  generalStore.addToCard(data, props.currentPage);
  setForm(
    undefined,
    "cards",
    FormType.CARD,
    formData,
    props.data?.cards?.data?.length
  );
}
</script>

<template>
  <div class="py-20 px-10 bg-gray-50/50">
    <div class="mb-6 px-2">
      <h2 @click="setForm($event, 'title', FormType.TEXT, data?.title, null)" v-if="data?.title?.text"
        class="text-2xl font-semibold" :style="{
          color: useColor(data?.title?.color),
        }">
        {{ data?.title?.text }}
      </h2>
    </div>
    <ul class="flex items-stretch gap-5 overflow-x-auto py-4 px-2" :class="{
      '': data?.cards?.length > 1,
    }">
      <li v-for="(card, index) in data?.cards?.data" :key="card?.title" class="relative"
        @click="setForm($event, 'cards', FormType.CARD, card, index)">
        <div v-if="card?.bgImage || card?.button?.text"
          class="shadow-md rounded-lg min-w-[17rem] w-[17rem] relative aspect-[5/6] overflow-hidden">
          <img :src="card?.bgImage" alt="" class="w-full h-full object-cover hover:scale-[105%] transition-all" />
          <div v-if="card?.button?.text"
            class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-1.5 text-xs" :style="{
              background: useColor(card?.button?.bgColor),
            }">
            <p :style="{
              color: useColor(card?.button?.color),
            }">
              {{ card?.button?.text }}
            </p>
          </div>
        </div>
        <div v-else
          class="shadow-md rounded-lg min-w-[17rem] w-[17rem] relative aspect-[5/6] flex justify-center items-center">
          <h2 class="font-extralight text-red-600">No Detail Yes</h2>
        </div>
        <div class="absolute -top-2 -right-2 text-red-500 text-xl">
          <i class="fa fa-times-circle cursor-pointer" aria-hidden="true"
            @click="deleteCard($event, 'cards', index)"></i>
        </div>
      </li>
      <li @click="addCard"
        class="border-2 border-dotted border-black rounded-lg flex justify-center items-center min-w-[17rem] w-[17rem] aspect-[5/6] overflow-hidden cursor-pointer">
        <i class="fa fa-plus-circle text-4xl" aria-hidden="true"></i>
      </li>
    </ul>
  </div>
</template>
