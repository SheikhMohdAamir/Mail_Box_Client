import { createSlice } from "@reduxjs/toolkit";

const ItemlistSlice = createSlice({
    name:'itemlist',
    initialState:{data:[]},
    reducers:{
        addItemlistDataToReducer(state, action) {
            state.data = action.payload
        }
    }
})

export const itemlistAction = ItemlistSlice.actions

export default ItemlistSlice
