export function Reactions() {
    return (
        <div className="w-full flex flew-row justify-between items-center">
            <button className="shadow-lg bg-white rounded-full px-4 py-4 overflow-hidden flex flex-row items-center justify-center">
                <p className="text-3xl">👍</p>
            </button>
            <button className="shadow-lg bg-white rounded-full px-4 py-4 overflow-hidden flex flex-row items-center justify-center">
                <p className="text-3xl">👎️</p>
            </button>
            <button className="shadow-lg bg-white rounded-full px-4 py-4 overflow-hidden flex flex-row items-center justify-center">
                <p className="text-3xl">😮</p>
            </button>
            <button className="shadow-lg bg-white rounded-full px-4 py-4 overflow-hidden flex flex-row items-center justify-center">
                <p className="text-3xl">😍</p>
            </button>
        </div>
    )
}