<script setup>
import { Icon } from '@iconify/vue';
import { ref, watchEffect } from "vue";

const props = defineProps({
    data: Object,
    index: Number,
});
const emits = defineEmits(["setSocialLink", "deleteSocial"]);
const link = ref(props.data?.link);

watchEffect(() => {
    emits("setSocialLink", link.value, props.index);
});
</script>

<template>
    <div>

        <label for="" class="block text-orange-500">{{ data?.name }}</label>
        <div class="flex items-center gap-2">
            <input type="text" id="link" v-model="link" class="block border px-2 py-1 w-[90%] rounded-md mb-4" />
            <Icon icon="carbon:close-filled" class="text-red-500 cursor-pointer"
                @click="$emit('deleteSocial', index)" />
        </div>
    </div>
</template>
