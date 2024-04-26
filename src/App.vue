<script setup>
import { ref } from "vue";
import { useGeneralStore } from "./stores";
import { useColorStore } from "./stores/color";
import { onMounted } from "vue";

onMounted(() => {
  const data = localStorage.getItem("data")
  const color = localStorage.getItem("color")
  if (data) {
    useGeneralStore().data = JSON.parse(data)
  }
  if (color) {
    useColorStore().colors = JSON.parse(color)
  }
})

function setData(data) {
  componentStructure.value = data;
}
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style scoped></style>
