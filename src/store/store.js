import { configureStore } from "@reduxjs/toolkit";
import user from "./user/userReducer"
import categories from "./categories/categoriesReducer"
import mangas from "./mangas/mangasReducer"
import chapters from "./chapters/chaptersReducer"
import read from "./read/readReducer";
export const store = configureStore({
    reducer: {
        user,
        categories,
        mangas,
        chapters,
        read
    }
})