import { useSelector } from "react-redux"
import { CategoriesCB } from "../../components/filters/CategoriesCB"
import { SearchBar } from "../../components/filters/SearchBar"
import { useFilter } from "../../hooks/useFilters"
export function Mangas(){
    let {categories} = useSelector(store => store.categories)
    let {categoryQuery, searchQuery, handleCategoryQuery, handleSearchFilter} = useFilter()
    return(
        <h1>
            <SearchBar handleQuery={handleSearchFilter}/>
            <CategoriesCB  query={categoryQuery} handleQuery={handleCategoryQuery}/>
        </h1>
    )
}