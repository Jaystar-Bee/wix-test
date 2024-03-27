<script setup>
import { ref } from "vue";

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
