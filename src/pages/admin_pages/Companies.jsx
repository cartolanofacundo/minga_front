import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../store/admin/adminActions";
import { CompanyLine } from "../../components/admin/CompanyLine";

const {get_companies} =actions

export function Companies(){
    let{ companies_active, companies_inactive} = useSelector(store => store.admin)
    let dispatch = useDispatch();
    useEffect(() => {
        if(!companies_active.length > 0 && !companies_inactive.length > 0){
            dispatch(get_companies());
        }
    },[])
    return(
        <>
        {companies_active?.map((company) => {
            return <CompanyLine key={company._id} company={company}/>
        })}
        {companies_inactive?.map((company) => {
            return <CompanyLine key={company._id} company={company}/>
        })}
        </>
    )
}