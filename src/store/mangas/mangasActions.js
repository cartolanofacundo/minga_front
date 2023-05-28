import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../utils/api"
import { parsePagesArray } from "../../utils/utils";
import { toast } from "react-hot-toast";

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
const get_mangas_me = createAsyncThunk("get_mangas_me", async({searchQuery, categoryQuery, path}) => {
    try {
        if(searchQuery.length > 0){
            searchQuery += "&"
         }
        let headers = { headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}` } }
        let url = apiUrl + "mangas" + "/me?" + searchQuery + categoryQuery ;
        let res = await axios(url, headers)
        console.log(res.data.mangas)
        return{
            mangas: res.data.mangas
        }
    } catch (error) {
        console.log(error)
        return {
            mangas: []
        }
    }
})
const update_manga = createAsyncThunk("update_manga", async({manga_id, data, path}) => {
    try {
        let headers = { headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}` } }
        let url = apiUrl + "mangas/" + manga_id ;
        let res = await axios.put(url,data, headers)
        console.log(res.data.manga)
        if(res.data.success){
            toast.success(`Manga updated`)
        }
        return{
            manga: res.data.manga,
            path: path
        }
    } catch (error) {
        console.log(error)
        return {
            mangas: []
        }
    }
})
const remove_manga = createAsyncThunk("remove_manga", async({manga_id, path}) => {
    try {
        let headers = { headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}` } }
        let url = apiUrl + "mangas/" + manga_id ;
        let res = await axios.delete(url, headers)
        if(res.data.success){
            toast.success(`Manga deleted`)
        }
        return{
            manga_id: manga_id,
            path: path
        }
    } catch (error) {
        return {
            mangas: []
        }
    }
})

const actions = {get_mangas,get_mangas_me, update_manga, remove_manga}
export default actions;