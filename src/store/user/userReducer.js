import { createReducer } from "@reduxjs/toolkit";

import authActions from "./authActions"

const {sign_in} = authActions

let initial_state = {
    success: null,
    error: null,
    loading: true,
    user: null
}

const reducer = createReducer(
    initial_state,
    (builder) => builder
    .addCase(
        sign_in.fulfilled,
        (state, action) => {
            const new_state = {
                ...state,
                user: action.payload.user,
                loading: false,
                error: null,
                success: true
            }
            return new_state
        }
    )
    .addCase(
        sign_in.pending,
        (state, action) => {
            const new_state = {
                ...state,
                loading: true
            }
            return new_state;
        }
    )
    .addCase(
        sign_in.rejected,
        (state, action) => {
            const new_state = {
                ...state,
                error: action.payload.error
            }
        }
    )
)

export default reducer;