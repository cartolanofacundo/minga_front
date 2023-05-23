import { configureStore } from "@reduxjs/toolkit";
import user from "./user/userReducer"
import categories from "./categories/categoriesReducer"

export const store = configureStore({
    reducer: {
        user,
        categories
    }
})