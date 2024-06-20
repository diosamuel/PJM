import PriceSlider from './PriceSlider'
export default function SidebarCategory({className}){
	return (
	<div className={`space-y-5 border border-gray-300 shadow-lg p-3 rounded-lg h-full ${className}`}>
        <div>
            <h3 className="text-xl mb-3 uppercase font-semibold">Kategori</h3>
            <div className="space-y-2">
                {['Bak Pickup/Mobil','Box Pickup/Mobil','Sparepart'].map((kategori,n)=>
                    <div className="flex items-center" key={n}>
                        <input type="checkbox" name={`cat-${n}`} id={`cat-${n}`} className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                        <label htmlFor={`cat-${n}`} className="text-gray-600 ml-3 cursor-pointer">{kategori}</label>
                    </div>
                )}
            </div>
        </div>
    </div>
    )

}