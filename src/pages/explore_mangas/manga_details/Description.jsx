import { useSelector } from "react-redux"

export function Description() {
    const {manga} = useSelector(store => store.chapters)
    return (
        <h1 className="px-2">{manga?.description}</h1>
    )
}