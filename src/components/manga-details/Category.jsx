import { useSelector } from "react-redux"

export function Category() {
    const {manga} = useSelector(store => store.chapters)
    return (
        <div className='px-4 py-2 rounded-full' style={{ border: `1px solid ${manga?.category_id?.color}`, color: manga?.category_id?.color, backgroundColor: manga?.category_id?.hover}}>
            {manga?.category_id?.name}
        </div>
    )
}