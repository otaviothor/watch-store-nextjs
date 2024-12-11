import { produce } from 'immer';
import create from 'zustand';

const initialState = {
  open: false,
  products: [],
};

export const useCartStore = create((set) => {
  const setState = (fn) => set(produce(fn));

  return {
    state: {
      ...initialState,
    },
    actions: {
      reset() {
        setState((store) => {
          store.state = initialState;
        });
      },
      toggle() {
        setState(({ state }) => {
          state.open = !state.open;
        });
      },

      add(product) {
        setState(({ state }) => {
          if (!state.products.includes(product)) state.products.push(product);
        });
      },
    },
  };
});
