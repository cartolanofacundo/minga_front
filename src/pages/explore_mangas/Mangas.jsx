import { useNavigate, useParams } from "react-router-dom"
import { CategoriesCB } from "../../components/filters/CategoriesCB"
import { SearchBar } from "../../components/filters/SearchBar"
import { Pagination } from "../../components/pagination/Pagination"
import { useFilter } from "../../hooks/useFilters"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import actions from "../../store/mangas/mangasActions"
import { MangasMap } from "../../components/explore-mangas/MangasMap"
import { SkeletonMap } from "../../components/explore-mangas/SkeletonMap"

const { get_mangas } = actions
export function Mangas() {
    const firstRender = useRef(true)
    const { pages, page, path, loading } = useSelector(store => store.mangas)
    const dispatch = useDispatch()
    let navigate = useNavigate()
    let { categoryQuery, searchQuery, handleCategoryQuery, handleSearchFilter } = useFilter("/mangas")
    let { page: pageUrl } = useParams()

    useEffect(() => {
        let pathLocal = "/mangas"
        let pageLocal = pageUrl
        if(pages){
            if(parseInt(pageUrl) > pages.length){
                navigate("/mangas/1")
            }
        }
        if (page !== parseInt(pageUrl) || path !== "/mangas"){
            dispatch(get_mangas({ path: pathLocal, page: pageLocal, searchQuery, categoryQuery }))
        }
        if (page === parseInt(pageUrl) || path === "/mangas"){
            if(searchQuery !== "" || categoryQuery !== ""){
                dispatch(get_mangas({ path: pathLocal, page: pageLocal, searchQuery, categoryQuery }))
            }
            if(!firstRender.current && searchQuery === "" && categoryQuery === ""){
                dispatch(get_mangas({ path: pathLocal, page: pageLocal, searchQuery, categoryQuery }))
            }
        }
        firstRender.current = false

        
        //eslint-disable-next-line
    }, [searchQuery, categoryQuery, pageUrl])



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