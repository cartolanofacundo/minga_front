import { useNavigate, useParams } from "react-router-dom"
import { CategoriesCB } from "../../components/filters/CategoriesCB"
import { SearchBar } from "../../components/filters/SearchBar"
import { Pagination } from "../../components/pagination/Pagination"
import { useFilter } from "../../hooks/useFilters"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import actions from "../../store/mangas/mangasActions"
import { MangasMap } from "../../components/explore-mangas/MangasMap"
import { SkeletonMap } from "../../components/explore-mangas/SkeletonMap"

const { get_mangas } = actions
export function Mangas() {
    const { pages, page, path, loading } = useSelector(store => store.mangas)
    let navigate = useNavigate()
    const dispatch = useDispatch()
    let { categoryQuery, searchQuery, handleCategoryQuery, handleSearchFilter } = useFilter()
    let { page: pageUrl } = useParams()
    useEffect(() => {
        if (page !== pageUrl && path !== "/mangas") {
            let path = "/mangas"
            let page = pageUrl
            dispatch(get_mangas({ page, path }))
        }
        //eslint-disable-next-line
    }, [])
    useEffect(() => {
        let path = "/mangas"
        let page = pageUrl
        dispatch(get_mangas({ page, path, searchQuery, categoryQuery }))
        //eslint-disable-next-line
    }, [pageUrl])
    useEffect(() => {
        let path = "/mangas"
        let page = 1
        dispatch(get_mangas({ path, page, searchQuery, categoryQuery }))
        navigate("/mangas/1")
        //eslint-disable-next-line
    }, [searchQuery, categoryQuery])



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
                    {loading
                        ? <SkeletonMap />
                        : <MangasMap />
                    }
                    <Pagination pages={pages} path={"/mangas"} page={pageUrl} />
                </div>
            </div>



        </div>
    )
}