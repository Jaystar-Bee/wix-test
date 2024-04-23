<script setup>
import { FormType } from "./../../types/enums";
import useColor from "../../composables/useColor";
import { Icon } from '@iconify/vue';

const props = defineProps({
    data: Object,
    index: Number,
});

</script>


<template>
    <footer class="py-40 px-20" :style="{ background: useColor('primary'), color: useColor('tertiary') }">
        <div class=" flex justify-between">
            <div>
                <h2 v-if="data?.logo?.text" class="text-4xl">{{ data?.logo?.text }}</h2>
                <img v-else :src="data?.title?.url" alt="" class="h-14">
                <p class="pt-2">{{ data?.description?.text }}</p>
            </div>
            <div>
                <h2 class="text-xl">Socials</h2>
                <ul class="mt-4">
                    <li v-for="item in data?.socials?.data" class="pl-1 mb-2 last:mb-0">
                        <a :href="item?.link" class="flex items-center gap-2">
                            <Icon :icon="item?.icon" />
                            <p>{{ item?.name }}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>