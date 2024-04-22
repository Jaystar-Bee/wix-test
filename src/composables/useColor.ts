import { useColorStore } from "../stores/color";
import { computed } from "vue"

export default computed(() => {
    return (val: string) => {
        return useColorStore().colors[val]
    }
})