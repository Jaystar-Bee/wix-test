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
      <label for="icon">ICON</label>
      <input
        type="text"
        v-model="formData.image"
        class="block border px-2 py-1 w-[90%] rounded-md mt-2"
      />
    </div>
    <div class="mt-10">
      <h2 class="font-semibold text-xl">TITLE</h2>
      <div class="mt-4">
        <label for="text" class="font-semibold">Text</label>
        <input
          type="text"
          id="text"
          v-model="formData.title.text"
          class="block border px-2 py-1 w-[90%] rounded-md mt-2"
        />
      </div>
      <div>
        <label for="color" class="font-semibold">Color</label>
        <input
          type="color"
          id="color"
          v-model="formData.title.color"
          class="block"
        />
      </div>
    </div>
    <div class="mt-10">
      <h2 class="font-semibold text-xl">DESCRIPTION</h2>
      <div class="mt-4">
        <label for="desText" class="font-semibold">Text</label>
        <textarea
          type="text"
          id="desText"
          v-model="formData.description.text"
          class="block border px-2 py-1 w-[90%] rounded-md mt-2"
        ></textarea>
      </div>
      <div>
        <label for="descColor" class="font-semibold">Color</label>
        <input
          type="color"
          id="descColor"
          v-model="formData.description.color"
          class="block"
        />
      </div>
    </div>
  </form>
</template>
