import { useState } from "react";
import { debounce } from "../utils/utils";
import { useNavigate } from "react-router";

export function useFilter(path = null) {
    const [categoryQuery, setCategoryQuery] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [timerId, setTimerId] = useState(null);
    let navigate = useNavigate()
    function hadleSetSearchQuery(data){
        console.log("me ejecute papapaa")
        setSearchQuery(data)
        navigate(path + "/1")
    }
    const handleCategoryQuery = function (form) {
        let labelsArray = Array.from(form.current.children);
        let inputArray = labelsArray.map((item) => {
            return item.children[0]
        })
        let newCategoryQuery = ""
        let allClicked = false
        for (let item of inputArray) {
            if (item.value === "all" && item.checked) {
                setCategoryQuery("");
                newCategoryQuery = "";
                allClicked = true
                item.checked = false
            } else {
                if (allClicked) {
                    item.checked = false
                } else {
                    newCategoryQuery += item.checked ? "category_id=" + item.value + "&" : "";
                    setCategoryQuery(newCategoryQuery)
                }

            }
        }

    }

    const handleSearchFilter = function (e) {
        let search = "title=" + e.target.value;
        if(e.target.value === ""){
            search = ""
        }

        debounce({
            callback: hadleSetSearchQuery,
            data: search,
            time: 700,
            timerId: timerId,
            setTimerId: setTimerId
        })
    }

    return { categoryQuery, searchQuery, handleCategoryQuery, handleSearchFilter }

}

