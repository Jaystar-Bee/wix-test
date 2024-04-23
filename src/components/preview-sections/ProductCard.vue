<script setup>

const props = defineProps({
    product: Object
})

</script>

<template>
    <li class="bg-white rounded-lg overflow-hidden max-w-[17rem]">
        <div class="w-[17rem] h-[20rem]">
            <img :src="product?.image" alt="image" class="h-full w-full object-cover">
        </div>
        <div class="py-5 px-3">
            <h2 class="text-xl font-bold">{{ product?.name }}</h2>
            <p class="text-green-800 pb-3">N {{ product?.price?.toLocaleString() }}</p>
            <p>{{ product?.description }}</p>
            <div class="mt-5 flex items-center gap-2">
                <button
                    class="flex-1 bg-orange-900 text-white outline-none border-none rounded-full py-2 hover:bg-orange-800 duration-300">View</button>
                <button
                    class="flex-1 bg-green-900 text-white outline-none border-none rounded-full py-2 hover:bg-green-800 duration-300">Add
                    to cart</button>
            </div>
        </div>
    </li>
</template>