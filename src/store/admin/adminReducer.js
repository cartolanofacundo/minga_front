import { createReducer } from "@reduxjs/toolkit";
import adminActions from "./adminActions";

const { get_authors, toogle_author, get_companies, toogle_company } = adminActions

let initialState = {
    authors_active: [],
    authors_inactive: [],
    companies_active: [],
    companies_inactive: [],
    loading: false,
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            get_authors.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    authors_active: action.payload.authors_active,
                    authors_inactive: action.payload.authors_inactive
                }
                return newState
            }
        )
        .addCase(
            get_authors.pending,
            (state, action) => {
                let newState = {
                    ...state,
                    loading: true,
                }
                return newState
            }
        )
        .addCase(
            get_authors.rejected,
            (state, action) => {
                let newState = {
                    ...state,
                    loading: false,
                }
                return newState
            }
        )
        .addCase(
            get_companies.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    companies_active: action.payload.companies_active,
                    companies_inactive: action.payload.companies_inactive
                }
                return newState
            }
        )
        .addCase(
            get_companies.pending,
            (state, action) => {
                let newState = {
                    ...state,
                    loading: true,
                }
                return newState
            }
        )
        .addCase(
            get_companies.rejected,
            (state, action) => {
                let newState = {
                    ...state,
                    loading: false,
                }
                return newState
            }
        )
        .addCase(
            toogle_author.fulfilled,
            (state, action) => {
                let newState = {}
                if (action.payload.author.active) {
                    newState = {
                        ...state,
                        authors_active: [...state.authors_active, action.payload.author],
                        authors_inactive: state.authors_inactive.filter((item) => item._id !== action.payload.author._id)
                    }
                } else {
                    newState = {
                        ...state,
                        authors_inactive: [...state.authors_inactive, action.payload.author],
                        authors_active: state.authors_active.filter((item) => item._id !== action.payload.author._id)
                    }
                }
                return newState
            }
        )
        .addCase(
            toogle_author.pending,
            (state, action) => {
                let newState = {
                    ...state,
                    loading: true,
                }
                return newState
            }
        )
        .addCase(
            toogle_author.rejected,
            (state, action) => {
                let newState = {
                    ...state,
                    loading: false,
                }
                return newState
            }
        )
        .addCase(
            toogle_company.fulfilled,
            (state, action) => {
                
                let newState={}
                if (action.payload.company.active) {
                    newState = {
                        ...state,
                        companies_active: [...state.companies_active, action.payload.company],
                        companies_inactive: state.companies_inactive.filter((item) => item._id !== action.payload.company._id)
                    }
                } else {
                    newState = {
                        ...state,
                        companies_active: state.companies_active.filter((item) => item._id !== action.payload.company._id),
                        companies_inactive: [...state.companies_inactive, action.payload.company]
                    }
                }
                return newState
            }
        )
        .addCase(
            toogle_company.pending,
            (state, action) => {
                
                let newState={
                    ...state,
                    loading: true,
                }
                
                return newState
            }
        )
        .addCase(
            toogle_company.rejected,
            (state, action) => {
                
                let newState={
                    ...state,
                    loading: false,
                }
                
                return newState
            }
        )
)
export default reducer