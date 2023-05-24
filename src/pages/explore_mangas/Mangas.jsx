import { useParams } from "react-router-dom"
import { CategoriesCB } from "../../components/filters/CategoriesCB"
import { SearchBar } from "../../components/filters/SearchBar"
import { Pagination } from "../../components/pagination/Pagination"
import { useFilter } from "../../hooks/useFilters"
export function Mangas() {
    let { categoryQuery, searchQuery, handleCategoryQuery, handleSearchFilter } = useFilter()
    let {page} = useParams()
    return (
        <div className="w-full h-full flex flex-col justify-start items-center">
            <div className="w-full flex flex-col h-[40vh] justify-center items-center lg:h-[60vh] bg-[url('../../src/assets/images/explore_mangas_image.png')] bg-cover bg-top">
                <div className="w-full lg:w-1/2 h-1/2 flex flex-col justify-between items-center px-4">
                    <h1 className="font-roboto font-bold text-white text-4xl lg:text-5xl">Mangas</h1>
                    <SearchBar handleQuery={handleSearchFilter} />
                </div>
            </div>
            <div className="bg-[#EBEBEB] w-full lg:px-20 min-h-[60vh] h-full lg:min-h-[40vh] ">
                <div className="mt-[-5vh] lg:mt-[-10vh] flex flex-col rounded-t-3xl bg-white w-full min-h-[65vh] lg:min-h-[50vh] p-8">
                    <CategoriesCB query={categoryQuery} handleQuery={handleCategoryQuery} />
                    <div className="grow">
                       

                       <p>mangas</p>


                    </div>
                    <Pagination pages={[1,2,3]} path={"/mangas"} page={page}/>
                </div>
            </div>



        </div>
    )
}