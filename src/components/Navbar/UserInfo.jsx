export function UserInfo() {
    return (
        <div className="w-full flex flex-row justify-start items-center gap-4">
            <figure>
                <img className="w-14 h-14 object-cover rounded-full items-center justify-between" src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" alt="" />
            </figure>
            <div className="text-white font-roboto">
                <p className="font-bold">Facundo Cartolano</p>
                <p className="font-light text-sm">cartolanofacundo@gmail.com</p>
            </div>
        </div>
    )
}