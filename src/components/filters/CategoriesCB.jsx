import { useRef } from "react"
import { useSelector } from "react-redux"


export function CategoriesCB({ handleQuery ,query }) {
    let { categories } = useSelector(store => store.categories)
    let form = useRef()
    return (
        <form ref={form} onChange={() => handleQuery(form)} className="flex flex-row gap-4 self-start flex-wrap"  >
            <label htmlFor="all" className="px-4 py-2 sm:px-6 sm:py-2 rounded-full sm:mr-4" style={{ border: `1px solid #999999`, color: query.length > 0 ? "#999999" : "#ffffff", backgroundColor: query.length > 0 ? "#ffffff" : "#999999" }}>
                All
                <input className="hidden" id="all" type="checkbox" value="all" />
            </label>
            {categories?.map((item) => {
                return (
                    <label key={item._id} htmlFor={item._id} className='px-4 py-2 sm:px-6 sm:py-2 rounded-full' style={{ border: `1px solid ${item.color}`, color: item.color, backgroundColor: query.includes(item._id) ? item.hover : "white" }}>
                        {item.name}
                        <input className="hidden " id={item._id} type="checkbox" value={item._id} />
                    </label>
                )
            })}
        </form>
    )

}