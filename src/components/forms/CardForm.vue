<script setup>
import { reactive, watch } from "vue";
const emits = defineEmits(["updateData"]);
const props = defineProps({
  data: Object,
});

// FORM
let formData = reactive(props?.data);

watch(formData, (val) => {
  emits("updateData", formData);
});
watch(props, (val) => {
  formData = props?.data;
});
</script>

<template>
  <form action="post">
    <div>
      <label for="bgImage" class="font-semibold">Background Image</label>
      <input
        type="text"
        id="bgImage"
        v-model="formData.bgImage"
        class="block border px-2 py-1 w-[90%] rounded-md mt-2"
      />
    </div>
    <div class="mt-6">
      <h2 class="font-bold text-xl">Package Name Section</h2>
      <div class="mt-4">
        <label for="text" class="font-semibold">Text</label>
        <input
          type="text"
          id="text"
          v-model="formData.button.text"
          class="block border px-2 py-1 w-[90%] rounded-md mt-"
        />
      </div>
      <div class="mt-2.5">
        <label for="color" class="font-semibold">Color</label>
        <input
          type="color"
          id="color"
          v-model="formData.button.color"
          class="block"
        />
      </div>
      <div class="mt-2.5">
        <label for="bgColor" class="font-semibold">Background Color</label>
        <input
          type="color"
          id="bgColor"
          v-model="formData.button.bgColor"
          class="block"
        />
      </div>
    </div>
  </form>
</template>
