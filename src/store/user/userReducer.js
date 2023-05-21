import { createReducer } from "@reduxjs/toolkit";

import authActions from "./authActions"

const {sign_in, sign_in_token, sign_out} = authActions

let initial_state = {
    success: null,
    error: null,
    loading: null,
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
        //eslint-disable-next-line
        (state, action) => {
            const new_state = {
                ...state,
                error: null,
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
                error: action.payload.error,
                success: action.payload.success,
                loading: action.payload.loading,
                user: null
            }
            return new_state
        }
    )
    .addCase(
        sign_in_token.fulfilled,
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
        sign_in_token.pending,
        //eslint-disable-next-line
        (state, action) => {
            const new_state = {
                ...state,
                error: null,
                loading: true
            }
            return new_state;
        }
    )
    .addCase(
        sign_in_token.rejected,
        (state, action) => {
            const new_state = {
                ...state,
                error: action.payload.error,
                success: false,
                loading: false,
                user: null
            }
            return new_state
        }
    )
    .addCase(
        sign_out.fulfilled,
        //eslint-disable-next-line
        (state, action) => {
            const new_state = {
                ...state,
                user: null,
                loading: false,
                error: null,
                success: true
            }
            return new_state
        }
    )
    .addCase(
        sign_out.pending,
        //eslint-disable-next-line
        (state, action) => {
            const new_state = {
                ...state,
                error: null,
                loading: true
            }
            return new_state;
        }
    )
    .addCase(
        sign_out.rejected,
        (state, action) => {
            console.log("entre al rejected", action.payload.error)
            const new_state = {
                ...state,
                error: action.payload.error,
                success: false,
                loading: false
            }
            return new_state
        }
    )
)

export default reducer;