import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import apiUrl from "../../../api";

let singUpgoogle = createAsyncThunk('singUpgoogle', async ({credential}) => {
    try {
        let res = await axios.post(apiUrl + 'auth/signupGoogle', {credential})
        return {
            user: res.data.user
        }
    } catch (error) {
        return {
            user: []
        }
    }
})
const action = {singUpgoogle}
export default action