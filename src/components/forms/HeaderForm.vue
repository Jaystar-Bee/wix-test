<script setup>
import { Icon } from '@iconify/vue';
import { reactive, watch } from "vue";
import LinkForm from "./LinkForm.vue";
import SocialForm from "./SocialForm.vue";

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
function setSocialLink(link, index) {
  formData.socials.data[index].link = link;
}
function addToSocial() {
  const data = {
    link: "https://facebook.com",
    name: "facebook",
    icon: "devicon:facebook"

  }
  if (formData?.socials?.data?.length >= formData?.socials?.max_length) {
    alert("You can't have more than 4 socials")
    return
  }
  if (getSocialType("facebook") === -1) {
    formData?.socials?.data?.push(data)
  } else if (getSocialType("instagram") === -1) {
    data.icon = "skill-icons:instagram"
    data.name = "instagram"
    data.link = "https://instagram.com/vendaw"
    formData?.socials?.data?.push(data)
  } else if (getSocialType("twitter") === -1) {
    data.icon = "fa6-brands:square-x-twitter"
    data.name = "twitter"
    data.link = "https://x.com/vendaw"
    formData?.socials?.data?.push(data)
  } else if (getSocialType("tiktok") === -1) {
    data.icon = "logos:tiktok-icon"
    data.name = "tiktok"
    data.link = "https://tiktok.com/vendaw"
    formData?.socials?.data?.push(data)
  }
}

function deleteSocial(index) {
  formData.socials?.data?.splice(index, 1)
}


function getSocialType(type) {
  return formData.socials?.data?.findIndex(soc => soc?.name === type)
}
</script>

<template>
  <form action="POST">
    <div>
      <label for="logo">LOGO</label>
      <input type="text" id="logo" v-model="formData.logo.text" placeholder="logo text"
        class="block border px-2 py-1 w-[90%] rounded-md mt-2" />
      <input type="text" id="logo" v-model="formData.logo.url" placeholder="logo url"
        class="block border px-2 py-1 w-[90%] rounded-md mt-2" />
    </div>
    <div class="mt-10">
      <div class="flex items-center space-x-10">
        <h2>Links</h2>
      </div>
      <LinkForm v-for="(data, index) in formData?.links" :key="index" :data="data" :index="index" class="mt-2"
        @setNavName="setNavName" />
    </div>
    <div class="mt-10">
      <div class="flex items-center space-x-4">
        <h2>Socials</h2>
        <Icon icon="ph:plus-fill" class="text-blue-500 text-xl cursor-pointer" @click="addToSocial" />
      </div>
      <SocialForm v-for="(data, index) in formData?.socials?.data" :key="data?.name" :data="data" :index="index"
        class="mt-2" @setSocialLink="setSocialLink" @deleteSocial="deleteSocial" />
    </div>
  </form>
</template>
