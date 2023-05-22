import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../utils/api.js"
import { parseError } from "../../utils/utils.js";
import axios from "axios";

const sign_in = createAsyncThunk("sign_in", async ({ data }, { rejectWithValue }) => {
    try {
        let url = apiUrl + "auth/signin";
        let response = await axios.post(url, data);
        localStorage.setItem('token', JSON.stringify(response.data.token))
        return {
            success: response.data.success,
            user: response.data.user,
            token: response.data.token
        }
    } catch (error) {
        let { newError } = parseError({ error });
        return rejectWithValue({
            success: false,
            loading: false,
            error: newError,
            user: null
        })
    }
})
const sign_in_token = createAsyncThunk("sign_in_token", async (data = null, { rejectWithValue }) => {
    try {
        let token = JSON.parse(localStorage.getItem("token"))
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = apiUrl + "auth/token";
        let response = await axios.post(url, data, headers);

        return {
            success: response.data.success,
            user: response.data.user,
            token: token
        }
    } catch (error) {
        localStorage.removeItem("token")
        return rejectWithValue({
            success: false,
            loading: false,
            error: {
                path: "token",
                message: "The token expired"
            },
            user: null
        })
    }
})
const sign_up = createAsyncThunk("sign_up", async ({ data }, { rejectWithValue }) => {
    try {
        let url = apiUrl + "auth/signup";
        let response = await axios.post(url, data);

        return {
            success: response.data.success
        }
    } catch (error) {
        let { newError } = parseError({ error });
        return rejectWithValue({
            success: false,
            loading: false,
            error: newError,
            user: null
        })
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
        let { newError } = parseError({ error });
        return {
            success: false,
            loading: false,
            error: newError,
            user: null
        }
    }
})
const clean_up = createAction("clean_up", () => {
    return{
        payload: {
            succes: null,
            error: null,
            loading: null
        }
    }
})

const actions = { sign_in, sign_in_token, sign_out, sign_up, clean_up }
export default actions;