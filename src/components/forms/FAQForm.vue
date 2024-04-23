<script setup>
import { reactive, watch } from "vue";
import { Icon } from '@iconify/vue';

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

function addToFAQ() {
    const data = {
        title: {
            text: "",
            description: ""
        },
        description: {
            text: "",
            description: ""
        },
    }
    formData.faqs.push(data)
}
function deleteFAQ(index) {
    formData.faqs.splice(index, 1)
}

</script>

<template>
    <form action="post">
        <div class="flex items-center gap-4">
            <p>FAQS</p>
            <Icon icon="ph:plus-fill" class="text-blue-500 text-xl cursor-pointer" @click="addToFAQ" />
        </div>
        <div v-for="(item, index) in formData.faqs" :key="index" class="mt-10">
            <div class="flex items-center gap-5">
                <h2>{{ index + 1 }}</h2>
                <Icon icon="carbon:close-filled" class="text-red-500 cursor-pointer" @click="deleteFAQ(index)" />

            </div>
            <div>
                <h2 class="font-semibold ">TITLE</h2>
                <div class="mt-2">
                    <input type="text" id="text" v-model="formData.faqs[index].title.text"
                        class="block border px-2 py-1 w-[90%] rounded-md mt-2" />
                </div>
            </div>
            <div class="mt-2">
                <h2 class="font-semibold">DESCRIPTION</h2>
                <div class="mt-2">
                    <textarea type="text" id="desText" v-model="formData.faqs[index].description.text"
                        class="block border px-2 py-1 w-[90%] rounded-md mt-2"></textarea>
                </div>
            </div>
        </div>
    </form>
</template>
