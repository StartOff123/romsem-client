import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from 'types/productType'

interface ICartState {
    cart: IProduct[] | null
}

const initialState: ICartState = {
    cart: null
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        LOAD_CARD: (state, action: PayloadAction<IProduct[]>) => {
            state.cart = action.payload
        },
        ADD_PRODUCT: (state, action: PayloadAction<IProduct>) => {
            if (!state.cart) {
                return { cart: new Array(action.payload) }
            }

            return { cart: [...state.cart, action.payload] }
        }
    }
})

export const { LOAD_CARD, ADD_PRODUCT } = cartSlice.actions
export default cartSlice.reducer