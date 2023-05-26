import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import actions from "../../store/admin/adminActions";
import { AuthorLine } from "../../components/admin/AuthorLine";


const {get_authors} = actions;
export function Authors(){
    let{ authors_active, authors_inactive} = useSelector(store => store.admin)
    let dispatch = useDispatch();
    useEffect(() => {
        if(!authors_active.length > 0 && !authors_inactive.length > 0){
            dispatch(get_authors());
        }
    },[authors_active])
    return(
        <>
        {authors_active?.map((author) => {
            return <AuthorLine key={author._id} author={author}/>
        })}
        {authors_inactive?.map((author) => {
            return <AuthorLine key={author._id} author={author}/>
        })}
        </>
    )
}