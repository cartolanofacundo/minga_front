import { createReducer } from "@reduxjs/toolkit";
import actions from "./chaptersActions";

const { get_all_from_manga, get_manga } = actions


const initial_state = {
    manga: null,
    manga_id: null,
    chapters: [],
    path: null,
    loading: false,
    page: 1,
    pages: null
}


const reducer = createReducer(
    initial_state,
    (builder) => builder
        .addCase(
            get_all_from_manga.fulfilled,
            (state, action) => {
                const new_state = {
                    ...state,
                    chapters: action.payload.chapters,
                    page: action.payload.page,
                    pages: action.payload.pages,
                    manga_id: action.payload.manga_id,
                    path: action.payload.path,
                    loading: false
                }
                return new_state
            }
        )
        .addCase(
            get_all_from_manga.pending,
            (state, action) => {
                const new_state = {
                    ...state,
                    loading: true
                }
                return new_state
            }
        )
        .addCase(
            get_all_from_manga.rejected,
            (state, action) => {
                const new_state = {
                    ...state,
                    manga_id: null,
                    chapters: null,
                    path: null,
                    loading: false,
                    page: 1,
                    pages: null
                    

                }
                return new_state
            }
        )
        .addCase(
            get_manga.fulfilled,
            (state, action) => {
                console.log("entre aca")
                const new_state = {
                    ...state,
                    manga: action.payload.manga
                }
                return new_state
            }
        )
        .addCase(
            get_manga.pending,
            (state, action) => {
                const new_state = {
                    ...state,
                    loading: true
                }
                return new_state
            }
        )
        .addCase(
            get_manga.rejected,
            (state, action) => {
                const new_state = {
                    ...state,
                    loading: false,
                    manga_id: null,
                    path: null,
                    manga: null
                }
                return new_state
            }
        )
)

export default reducer