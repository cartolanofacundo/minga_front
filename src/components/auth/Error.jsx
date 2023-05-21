export function Error({error}){
    return(
        <>
        {
            error && <div className="w-full bg-red-300 font-roboto text-red-600 text-center p-2 rounded-lg">{error}</div>
        }
        </>
        
    )
}