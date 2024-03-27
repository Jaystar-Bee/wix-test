<script setup>
import { Popper } from "vue-use-popperjs";
import { COMPONENTS } from "../types/enums";
import { useGeneralStore } from "./../stores/index";
import componentData from "./../utils/data";
import { computed } from "vue";

const generalStore = useGeneralStore();
const props = defineProps({
  name: COMPONENTS,
  index: Number,
  isTop: Boolean,
  isAdd: Boolean,
});

const components = computed(() => {
  return Object.values(COMPONENTS);
});

function addComponent(comp) {
  const componentDetails = componentData?.find(
    (component) => component?.name === comp
  );
  if (props?.isTop) {
    generalStore.addToTopSection(props?.index, componentDetails);
  } else if (props?.isAdd) {
    generalStore.pushToData(componentDetails);
  } else {
    generalStore.addToBottomSection(props?.index, componentDetails);
  }
}
</script>

<template>
  <Popper reference-is="button" popper-is="span">
    <template #reference>
      <button
        class="text-white bg-green-600 text-xs px-4 py-1 rounded-md whitespace-nowrap"
      >
        {{ isTop ? "Add to top" : isAdd ? "Add Component" : "Add to bottom" }}
      </button>
    </template>
    <ul
      class="bg-white shadow-md px-4 py-2 rounded-md max-h-[5rem] overflow-y-auto mt-1"
    >
      <li
        v-for="(comp, index) in components"
        @click="addComponent(comp)"
        :key="comp"
        class="text-xs mb-2 hover:text-green-800 cursor-pointer font-semibold"
      >
        {{ index + 1 }} {{ comp }}
      </li>
    </ul>
  </Popper>
</template>
