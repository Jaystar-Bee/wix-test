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
      <label for="id" class="font-semibold">Product Id</label>
      <input type="text" id="id" v-model.number="formData.id" class="block border px-2 py-1 w-[90%] rounded-md mt-2" />
    </div>
  </form>
</template>
