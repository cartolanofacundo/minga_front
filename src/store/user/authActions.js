import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../utils/api.js"
import { parseError } from "../../utils/utils.js";
import axios from "axios";

const sign_in = createAsyncThunk("sign_in", async ({ data }) => {
    try {
        let url = apiUrl + "auth/signin";
        let response = await axios.post(url, data);
        return {
            success: response.data.success,
            user: response.data.user
        }
    } catch (error) {
        let {newError} =  parseError({error});
        return {
            success: false,
            loading: false,
            error: newError,
            user: null
        }
    }
})
const sign_in_token = createAsyncThunk("sign_in_token", async () => {
    try {
        let token = JSON.parse(localStorage.getItem("token"))
        let url = apiUrl + "auth/token";
        let response = await axios.post(url, null, token);
        return {
            success: response.data.success,
            user: response.data.user
        }
    } catch (error) {
        let {newError} =  parseError({error});
        return {
            success: false,
            loading: false,
            error: newError,
            user: null
        }
    }
})
const sign_out = createAsyncThunk("sign_out", async () => {
    try {
        let token = JSON.parse(localStorage.getItem("token"))
        let url = apiUrl + "auth/signout";
        //eslint-disable-next-line
        let response = await axios.post(url, null, token);
        return {
            success: true,
            user: null
        }
    } catch (error) {
        let {newError} =  parseError({error});
        return {
            success: false,
            loading: false,
            error: newError,
            user: null
        }
    }
})

const actions = { sign_in, sign_in_token, sign_out }
export default actions;