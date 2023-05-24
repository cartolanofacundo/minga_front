import { createReducer } from "@reduxjs/toolkit";
import action from "./singnupAction";
const {singUpgoogle} = action

let initialState = {
    user : []
}

const reducer = createReducer(
    initialState,
    (builder)=>builder
    .addCase(
        singUpgoogle.fulfilled,
        (state,action)=>{
            let newState ={
                ...state,
                user: action.payload.user
            }
            return newState
        }
    )
)
export default reducer