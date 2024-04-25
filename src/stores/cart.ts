import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => {
        return {
            carts: [] as any[],
        };
    },
    actions: {
        addToCart(product: any) {
            if (this.carts.length === 0) {
                this.carts.push({ product_id: product?.id, quantity: 1 });
            } else {
                const isExist = this.carts.find((item: any) => item.product_id === product.id);
                if (isExist) {
                    isExist.quantity += 1;
                } else {
                    this.carts.push({ product_id: product?.id, quantity: 1 });
                }
            }
        },
    },
});
