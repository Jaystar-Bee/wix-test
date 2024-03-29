<script setup>
import { reactive, watch } from "vue";
import LinkForm from "./LinkForm.vue";

const props = defineProps({
  data: Object,
});

const emits = defineEmits(["updateData"]);
let formData = reactive(props?.data);

watch(formData, (val) => {
  emits("updateData", val);
});
watch(props, (val) => {
  formData = props?.data;
});

function setNavName(name, index) {
  formData.links[index].name = name;
}

function setNavLink(link, index) {
  formData.links[index].link = link;
}
function deleteLink(index) {
  formData.links?.splice(index, 1);
}

function addToLink() {
  formData.links.push({ name: "", link: "" });
}
</script>

<template>
  <form action="POST">
    <div>
      <label for="logo">LOGO</label>
      <input
        type="text"
        id="logo"
        v-model="formData.logo"
        class="block border px-2 py-1 w-[90%] rounded-md mt-2"
      />
    </div>

    <div class="mt-2">
      <label for="section_color">Background Color</label>
      <input
        type="color"
        v-model="formData.bgColor"
        class="block"
        name="section_color"
        id="section_color"
      />
    </div>
    <div class="mt-2">
      <label for="text_color">Text Color</label>
      <input
        type="color"
        v-model="formData.textColor"
        name="text_color"
        class="block"
        id="text_color"
      />
    </div>

    <div class="mt-2">
      <label for="link_color">Link Color</label>
      <input
        type="color"
        v-model="formData.linkColor"
        name="link_color"
        class="block"
        id="link_color"
      />
    </div>
    <div class="mt-20">
      <div class="flex items-center space-x-10">
        <h2>Links</h2>
        <i
          @click="addToLink"
          class="fa fa-plus-circle text-green-600 cursor-pointer"
          aria-hidden="true"
        ></i>
      </div>
      <LinkForm
        v-for="(data, index) in formData?.links"
        :key="index"
        :data="data"
        :index="index"
        class="mt-2"
        :class="{
          hidden: index === 0,
        }"
        @setNavName="setNavName"
        @setNavLink="setNavLink"
        @delete="deleteLink"
      />
    </div>
  </form>
</template>
