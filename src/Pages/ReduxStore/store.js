import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slices/LoginSlice";
import ItemlistSlice from "./Slices/ItemlistSlice";
import SentButtonSlice from "./Slices/SentButtonSlice";

const store = configureStore({
    reducer:{login:LoginSlice.reducer, itemlist:ItemlistSlice.reducer, sentbutton:SentButtonSlice.reducer}
})

export default store