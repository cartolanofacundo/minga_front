import { createReducer } from "@reduxjs/toolkit";
import actions from "./mangasActions";

const { get_mangas,get_mangas_me, update_manga, remove_manga } = actions

let initial_state = {
    page: 1,
    pages: [],
    path: null,
    mangas: [],
    loading: false
}

const reducer = createReducer(
    initial_state,
    (builder) => builder
        .addCase(
            get_mangas.fulfilled,
            (state, action) => {
                const new_state = {
                    ...state,
                    mangas: action.payload.mangas,
                    path: action.payload.path,
                    pages: action.payload.pages,
                    page: action.payload.page,
                    loading: false
                }
                return new_state
            }
        )
        .addCase(
            get_mangas.pending,
            //eslint-disable-next-line
            (state, action) => {
                const new_state = {
                    ...state,
                    loading: true
                }
                return new_state
            }
        )
        .addCase(
            get_mangas.rejected,
            //eslint-disable-next-line
            (state, action) => {
                const new_state = {
                    ...state,
                    mangas: [],
                    page: 1,
                    path: null,
                    loading: false
                }
                return new_state
            }
        )
        .addCase(
            //cada caso implica un cambio
            get_mangas_me.fulfilled, //nombre de la acccion que tiene la informacion a reducir
            (state, action) => {
                const new_state = {
                    ...state,
                    mangas: action.payload.mangas,
                    loading: false
                }
                return new_state
            }
        )
        .addCase(
            //cada caso implica un cambio
            get_mangas_me.pending, //nombre de la acccion que tiene la informacion a reducir
            (state, action) => {
                const new_state = {
                    ...state,
                    loading: true
                }
                return new_state
            }
        )
        .addCase(
            //cada caso implica un cambio
            get_mangas_me.rejected, //nombre de la acccion que tiene la informacion a reducir
            (state, action) => {
                const new_state = {
                    ...state,
                    loading: false
                }
                return new_state
            }
        )
        .addCase(
            //cada caso implica un cambio
            update_manga.fulfilled, //nombre de la acccion que tiene la informacion a reducir
            (state, action) => {
                const new_state = {
                    ...state,
                    mangas: state.mangas.map((item) => {
                        if(item._id === action.payload.manga._id){
                            return action.payload.manga
                        }
                        return item
                    })
                }
                return new_state
            }
        )
        .addCase(
            //cada caso implica un cambio
            update_manga.pending, //nombre de la acccion que tiene la informacion a reducir
            (state, action) => {
                const new_state = {
                    ...state,
                    loading:true,
                }
                return new_state
            }
        )
        .addCase(
            //cada caso implica un cambio
            update_manga.rejected, //nombre de la acccion que tiene la informacion a reducir
            (state, action) => {
                const new_state = {
                    ...state,
                    loading:false,
                }
                return new_state
            }
        )
        .addCase(
            remove_manga.fulfilled,
            (state, action) => {
                const new_state = {
                    ...state,
                    loading: false,
                    mangas: state.mangas.filter((item) => item._id !== action.payload.manga_id),
                    path: action.payload.path
                }
                return new_state
            }
        )
        .addCase(
            remove_manga.pending,
            (state, action) => {
                const new_state = {
                    ...state,
                    loading: true
                }
                return new_state
            }
        )
        .addCase(
            remove_manga.rejected,
            (state, action) => {
                const new_state = {
                    ...state,
                    loading: false
                }
                return new_state
            }
        )
)

export default reducer;