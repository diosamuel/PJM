import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) => set((state) => {
        const existingProduct = state.cart.find(item => item.id === product.id);
        if (existingProduct) {
          return {
            cart: state.cart.map(item =>
              item.id === product.id ? { ...item, quantity: product.quantity || item.quantity + 1 } : item
            )
          };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }),
      removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter(item => item.id !== productId)
      })),
      clearCart: () => set({ cart: [] }),
      seeQuantity: (productId) => {
        const product = useCartStore.getState().cart.find(item => item.id === productId);
        return product ? product.quantity : 0;
      },
      increaseQuantity: (productId) => set((state) => ({
        cart: state.cart.map(item =>
          item.id === productId ? { ...item, quantity: Math.min(item.stock, item.quantity + 1) } : item
        )
      })),
      decreaseQuantity: (productId) => set((state) => ({
        cart: state.cart.map(item =>
          item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        )
      })),
    }),
    {
      name: 'cartState',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
