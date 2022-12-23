import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer; 


//payload is the new product pushed to cart
// action types allow you tell your reducer what action it should take, the payload is the data that your reducer will use to update the state. This