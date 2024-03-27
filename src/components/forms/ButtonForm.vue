<script setup>
import { reactive, watch } from "vue";
const emits = defineEmits(["updateData"]);
const props = defineProps({
  data: Object,
});
const formData = reactive(props?.data);

watch(formData, (val) => {
  emits("updateData", formData);
});
</script>

<template>
  <form action="post">
    <div>
      <label for="text" class="font-semibold">Text</label>
      <input
        type="text"
        id="text"
        v-model="formData.text"
        class="block border px-2 py-1 w-[90%] rounded-md mt-2"
      />
    </div>
    <div>
      <label for="color" class="font-semibold">Color</label>
      <input type="color" id="color" v-model="formData.color" class="block" />
    </div>
    <div>
      <label for="color" class="font-semibold">Background Color</label>
      <input type="color" id="color" v-model="formData.bgColor" class="block" />
    </div>
  </form>
</template>
