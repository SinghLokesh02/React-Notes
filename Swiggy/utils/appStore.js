import { configureStore } from "@reduxjs/toolkit";

// Import your reducers
import cartReducer from "./cartSlice";


const appStore = configureStore({
    reducer: {
        cart: cartReducer, 
    },
});


export default appStore;