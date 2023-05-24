import { configureStore } from "@reduxjs/toolkit";
import user from "./user/userReducer"
import categories from "./categories/categoriesReducer"
import mangas from "./mangas/mangasReducer"
export const store = configureStore({
    reducer: {
        user,
        categories,
        mangas
    }
})