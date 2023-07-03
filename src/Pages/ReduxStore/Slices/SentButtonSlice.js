import { createSlice } from "@reduxjs/toolkit";

const SentButtonSlice = createSlice({
    name:'sentbutton',
    initialState:{clicked:true},
    reducers:{
        toggleToSent(state) {
            state.clicked = false
            
        },
        toggleToInbox(state) {
            state.clicked = true
            
        }
    }
})

export const sentButtonActions = SentButtonSlice.actions

export default SentButtonSlice
