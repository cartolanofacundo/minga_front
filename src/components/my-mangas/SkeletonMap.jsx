import { SkeletonCard } from "./SkeletonCard"
export function SkeletonMap(){
    return(
        <div className="grow flex flex-row gap-x-14 gap-y-4 flex-wrap m-auto w-full justify-center mt-8">
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
        </div> 
    )
}