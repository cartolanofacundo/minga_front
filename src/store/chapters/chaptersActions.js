import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../utils/api";
import axios from "axios";
import { parsePagesArray } from "../../utils/utils";

const get_manga = createAsyncThunk("get_manga", async ({ manga_id, path }) => {
    try {
        let token = JSON.parse(localStorage.getItem("token"))
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = apiUrl + "mangas/" + manga_id;
        let response = await axios.get(url, headers);
        return {
            manga: response.data
        }
    } catch (error) {
        console.log(error)
    }
})

const get_all_from_manga = createAsyncThunk("get_all_from_manga", async ({ manga_id, page, path }) => {
    try {
        let token = JSON.parse(localStorage.getItem("token"))
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = apiUrl + "chapters?" + "manga_id=" + manga_id + "&" + "page=" + page;
        let response = await axios.get(url, headers);
        let pages = parsePagesArray(response.data.pages)
        console.log(response)
        return {
            chapters: response.data.chapters,
            page: page,
            pages: pages,
            manga_id: manga_id,
            path: path,
            loading: false
        }
    } catch (error) {
        console.log(error)
        return {
            loading: false
        }
    }


})

const actions = { get_all_from_manga, get_manga }
export default actions;