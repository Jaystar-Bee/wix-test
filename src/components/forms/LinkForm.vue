<script setup>
import { ref, watchEffect } from "vue";

const props = defineProps({
  data: Object,
  index: Number,
});
const emits = defineEmits(["setNavName",]);
const name = ref(props.data?.name);

watchEffect(() => {
  emits("setNavName", name.value, props.index);
});
</script>

<template>
  <div>
    <input type="text" id="name" v-model="name" class="block border px-2 py-1 w-[90%] rounded-md mt-2 mb-4" />
  </div>
</template>
