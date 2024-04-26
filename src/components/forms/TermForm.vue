<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { onMounted, reactive, watch } from "vue";
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

// watch(editor, (val) => {
//     formData.description.text = val
// })
</script>

<template>
    <form action="post">
        <div class="mt-10">
            <div>
                <h2 class="font-semibold ">TITLE</h2>
                <div class="mt-2">
                    <input type="text" id="text" v-model="formData.title.text"
                        class="block border px-2 py-1 w-[90%] rounded-md mt-2" />
                </div>
            </div>
            <div class="mt-2">
                <h2 class="font-semibold">DESCRIPTION</h2>
                <div class="mt-2 !list-decimal">
                    <QuillEditor theme="snow" v-model:content="formData.description.text" content-type="html"
                        toolbar="minimal" />
                    <!-- <textarea type="text" id="default" v-model="formData.description.text"
                        class="block border px-2 py-1 w-[90%] rounded-md mt-2"></textarea> -->
                </div>
            </div>
        </div>
    </form>
</template>
