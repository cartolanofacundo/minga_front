import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../utils/api";

let get_authors = createAsyncThunk('get_authors', async () => {
    try {
        let headers = {
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
        }
        let url = apiUrl + 'authors/admin'
        let response = await axios(url, headers)
        return {
            authors_inactive: response.data.authorInactive,
            authors_active: response.data.authorActive
        }
    } catch (error) {
        return {
            authors_inactive: [],
            authors_active: []
        }
    }
})

let toogle_author = createAsyncThunk('toogle_author', async ({author_id, active}) => {
    try {
        let headers = {
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
        }
        let url = apiUrl + "authors/" + author_id
        let response = await axios.put(url, {active: active}, headers)
        return {
            author: response.data.upd
        }
    } catch (error) {
        console.log(error)
    }
})
let get_companies = createAsyncThunk('get_companies', async () => {
    try {
        let headers = {
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
        }
        let response = await axios(apiUrl + 'companies/admin', headers)
        return {
            companies_inactive: response.data.companyInactive,
            companies_active: response.data.companyActive
        }
    } catch (error) {
        return {
            companies: []
        }

    }
})
let toogle_company = createAsyncThunk('companyUpdate', async ({ company_id, active }) => {
    try {
        let headers = {
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
        }
        let url = apiUrl + "companies/" + company_id
        let res = await axios.put( url, { active: active }, headers)
        console.log(res.data.upd)
        return {
            company: res.data.upd
        }
    } catch (error) {
        console.log(error)
    }
})

const actions = { get_authors, toogle_author, get_companies, toogle_company }
export default actions