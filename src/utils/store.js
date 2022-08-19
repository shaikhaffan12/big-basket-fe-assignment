import { configureStore } from "@reduxjs/toolkit";
import product from "../modules/Reducer/reducer";

export const store = configureStore({
    reducer: {product : product},
})