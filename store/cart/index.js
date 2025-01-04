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
      toggle() {
        setState(({ state }) => {
          state.open = !state.open;
        });
      },

      add(product) {
        setState(({ state }) => {
          if (!state.products.map((p) => p.id).includes(product.id)) {
            state.products.push(product);
            state.open = true;
          }
        });
      },

      remove(product) {
        setState(({ state }) => {
          if (!!state.products.find(({ id }) => id === product.id)) {
            state.products = state.products.filter(
              ({ id }) => id !== product.id,
            );
          }
        });
      },

      removeAll() {
        setState(({ state }) => {
          state.products = [];
        });
      },

      reset() {
        setState((store) => {
          store.state = initialState;
        });
      },
    },
  };
});
