import { configureStore } from "@reduxjs/toolkit"
import settingsSlice from "./slices/settingsSlice"
import productSlice from "./slices/productSlice"
import cartSlice from "./slices/cartSlice"

const store = configureStore({
    reducer: {
        settingsSlice,
        productSlice,
        cartSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store