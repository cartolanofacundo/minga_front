import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiUrl } from "../../utils/api.js"
import axios from "axios";

const sign_in = createAsyncThunk("sign_in", async ({ data }) => {
    try {
        let url = ApiUrl + "auth/signin";
        let response = await axios.post(url, data);
        return {
            success: response.data.success,
            user: response.data.user
        }
    } catch (error) {
        let newError = {}
        for (let item of error.response.data.message) {
            newError[item.path] = item.message;
        }
        return {
            success: false,
            loading: false,
            error: newError,
            user: null
        }
    }
})

const actions = { sign_in, }
export default actions;