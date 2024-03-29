<script setup>
import { ref, watchEffect } from "vue";

const props = defineProps({
  data: Object,
  index: Number,
});
const emits = defineEmits(["setNavName", "setNavLink", "delete"]);
const name = ref(props.data?.name);
const link = ref(props.data?.link);

watchEffect(() => {
  emits("setNavName", name.value, props.index);
  emits("setNavLink", link.value, props.index);
});
</script>

<template>
  <div>
    <div class="flex items-center space-x-2">
      <h2 class="font-semibold text-xl">Link {{ index + 1 }}</h2>
      <i
        @click="$emit('delete', index)"
        class="fa fa-times-circle text-red-500 cursor-pointer"
        aria-hidden="true"
      ></i>
    </div>
    <label for="name" class="font-medium">Name</label>

    <input
      type="text"
      id="name"
      v-model="name"
      class="block border px-2 py-1 w-[90%] rounded-md mt-2 mb-4"
    />
    <label for="link" class="font-medium">Link</label>
    <input
      type="text"
      id="link"
      v-model="link"
      class="block border px-2 py-1 w-[90%] rounded-md mt-2"
    />
  </div>
</template>
