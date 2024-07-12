import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  stock: number;
  quantity: number;
  description: string;
  category: string;
  rating: number;
  image: string;
}

const initialState: IProduct[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingProduct = state.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        const newQuantity = existingProduct.quantity + action.payload.quantity;
        if (newQuantity <= action.payload.stock) {
          existingProduct.quantity = newQuantity;
        } else {
          existingProduct.quantity = action.payload.stock;
        }
      } else {
        state.push(action.payload);
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const product = state.find((product) => product._id === action.payload);
      if (product && product.quantity < product.stock) {
        product.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const product = state.find((product) => product._id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product._id !== action.payload);
    },
    clearCart: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
