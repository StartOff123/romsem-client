import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ISettingsState  {
    isOpenMenu: boolean
}

const initialState: ISettingsState = {
    isOpenMenu: false
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        TOGGLE_MENU: (state, action: PayloadAction<boolean>) => {
            state.isOpenMenu = action.payload
        },
    }
})

export const { TOGGLE_MENU } = settingsSlice.actions
export default settingsSlice.reducer