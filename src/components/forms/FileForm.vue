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
      <label for="file" class="font-semibold">Image/Video</label>
      <input
        type="text"
        id="file"
        v-model="formData.src"
        class="block border px-2 py-1 w-[90%] rounded-md mt-2"
      />
    </div>
  </form>
</template>
