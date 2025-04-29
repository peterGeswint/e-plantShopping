import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name, image, cost} = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity ++;
      } else {
        state.items.push({name, image, cost, quantity: 1});
      }
    
    },

    removeItem: (state, action) => {
      state.item = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const {name, action} = action.payload;
      const itemToUpadte = state.items.find(item => item.name === name);
      if (itemToUpadte) {
        itemToUpadte.quantity = quantity;
      }    
    },
  },
});

export const calculateTotalAmount = (state) => {
  return state.cart.items.reduce((total, item) => {
    const itemCost = parseFloat(item.cost.substring(1)); // Convert cost string to number
    return total + itemCost * item.quantity;
  }, 0);
};

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
