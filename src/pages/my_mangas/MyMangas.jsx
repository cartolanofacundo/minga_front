import { Outlet } from "react-router-dom"
import {MangasMap} from "../../components/my-mangas/MangasMap"
import {SkeletonMap} from "../../components/my-mangas/SkeletonMap"
import { useSelector, useDispatch } from "react-redux"
import  {CategoriesCB} from "../../components/filters/CategoriesCB"
import {SearchBar} from "../../components/filters/SearchBar"
import {useFilter} from "../../hooks/useFilters"
import actions from "../../store/mangas/mangasActions"
import { useEffect } from "react"

const {get_mangas_me} = actions

export function MyMangas() {
    const { path, loading } = useSelector(store => store.mangas)
    const {user} = useSelector(store => store.user)
    let { categoryQuery, searchQuery, handleCategoryQuery, handleSearchFilter } = useFilter()
    let dispatch = useDispatch()
    useEffect(() => {
        let pathLocal = "/me"
        
        if ( path !== "/me") {
            dispatch(get_mangas_me({ path: pathLocal, searchQuery, categoryQuery }))
        }
        if (searchQuery !== "" || categoryQuery !== "") {
            dispatch(get_mangas_me({ path: pathLocal, searchQuery, categoryQuery }))
        }
        if(searchQuery === "" || categoryQuery === ""){
            dispatch(get_mangas_me({ path: pathLocal, searchQuery, categoryQuery }))
        }


        //eslint-disable-next-line
    }, [searchQuery, categoryQuery])
    return (
        <>
            <Outlet />
            <div className="w-full h-full flex flex-col justify-start items-center">
                <div className="w-full flex flex-col h-[40vh] justify-center items-center lg:h-[60vh] bg-[url('../../src/assets/images/my_mangas_photo.png')] bg-cover bg-top">
                    <div className="w-full lg:w-1/2 h-1/2 flex flex-col justify-between items-center px-4">
                        <h1 className="font-roboto font-bold text-white text-4xl lg:text-5xl">{user.name} {user.last_name}</h1>
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
                    </div>
                </div>



            </div>
        </>
    )
}