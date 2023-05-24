import { useState } from "react";
import { debounce } from "../utils/utils";

export function useFilter() {
    const [categoryQuery, setCategoryQuery] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [timerId, setTimerId] = useState(null);


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

        debounce({
            callback: setSearchQuery,
            data: search,
            time: 700,
            timerId: timerId,
            setTimerId: setTimerId
        })
    }

    return { categoryQuery, searchQuery, handleCategoryQuery, handleSearchFilter }

}

