import { PrevButton } from "./PrevButton"
import { Pages } from "./pages"
import { NextButton } from "./NextButton"


export function Pagination({ pages, page, path }) {
    return (
        <div className="w-full h-[40px] flex flex-row justify-between items-stretch p-0  border-t-[1px] border-[#2B3D51] border-opacity-20 mt-4 flex-wrap">
            <PrevButton page={page} path={path} />
            <Pages pages={pages} page={page} path={path} />
            <NextButton pages={pages} page={page} path={path} />
        </div>
    )
}