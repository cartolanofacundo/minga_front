import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../utils/api"
import { parsePagesArray } from "../../utils/utils";

const get_mangas = createAsyncThunk("get_mangas", async ({page = 1, searchQuery = "", categoryQuery = "", path}) => {
    try {
        if(searchQuery.length > 0){
           searchQuery += "&"
        }
        let url = apiUrl + "mangas" + "?" + searchQuery + categoryQuery + "page=" + page
        let token = JSON.parse(localStorage.getItem("token"))
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let response = await axios(url, headers);
        let pages = parsePagesArray(response.data.pages)
        return {
            mangas: response.data.mangas,
            pages: pages,
            page: parseInt(page),
            path
        }
    } catch (error) {
        return{
            categories: []
        }
    }

})

const actions = {get_mangas}
export default actions;