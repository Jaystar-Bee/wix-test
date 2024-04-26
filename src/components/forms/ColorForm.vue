<script setup>
import { useColorStore } from '../../stores/color';
import { reactive, watch } from "vue"

const colorStore = useColorStore()

const colors = reactive(colorStore.colors)
watch(colors, (val) => {
    localStorage.setItem("color", JSON.stringify(colors))
})



</script>



<template>

    <div class="flex justify-between">
        <div>
            <label for="" class="block">Primary</label>
            <input type="color" v-model="colors.primary" />
        </div>
        <div>
            <label for="" class="block">Secondary</label>
            <input type="color" v-model="colors.secondary" />
        </div>
        <div>
            <label for="" class="block">Tertiary</label>
            <input type="color" v-model="colors.tertiary" />
        </div>
    </div>
</template>