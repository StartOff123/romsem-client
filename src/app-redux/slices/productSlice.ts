import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from 'types/productType'

interface IProductState {
    currentCatalog: IProduct[] | null
    currentProduct: IProduct | null
}

const initialState: IProductState = {
    currentCatalog: null,
    currentProduct: null
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        LOAD_CURRENT_CATALOG: (state, action: PayloadAction<IProduct[]>) => {
            if (action.payload.length === 0) {
                state.currentCatalog = null
            } else {
                state.currentCatalog = action.payload
            }
        },
        LOAD_CURRENT_PRODUCT: (state, action: PayloadAction<IProduct>) => {
            state.currentProduct = action.payload
        }
    }
})

export const { LOAD_CURRENT_CATALOG, LOAD_CURRENT_PRODUCT } = productSlice.actions
export default productSlice.reducer