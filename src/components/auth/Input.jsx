//eslint-disable-next-line
export function Input({ error, icon, placeholder, name, type }) {
    return (
        <div className='flex flex-col w-full font-roboto'>
            <fieldset className={`flex flex-col border py-2 px-4 rounded-xl ${error ? "border-red-600" : "border"} focus-within:border-[#4338CA] mb-2`}>
                <legend className='text-[#4338CA] capitalize'>{name}</legend>
                <div className='flex flex-row justify-between items-center'>
                    <input type={type} name={name} placeholder={placeholder} className='focus-visible:outline-none grow' />
                    <div className='text-[#4338CA]'>
                        {icon}
                    </div>

                </div>
            </fieldset>
            <p className='self-start px-2 text-red-600 opacity-75'>{error ? error : " "} </p>
        </div>
    )
}