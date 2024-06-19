import PriceSlider from './PriceSlider'
export default function SidebarCategory({className}){
	return (
	<div className={`divide-y divide-gray-200 space-y-5 border border-gray-300 shadow-lg p-3 rounded-lg h-full ${className}`}>
        <div>
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Kategori</h3>
            <div className="space-y-2">
                {['Bak','Box','Sparepart'].map((kategori,n)=>
                    <div className="flex items-center" key={n}>
                        <input type="checkbox" name={`cat-${n}`} id={`cat-${n}`} className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                        <label htmlFor={`cat-${n}`} className="text-gray-600 ml-3 cusror-pointer">{kategori}</label>
                    </div>
                )}
            </div>
        </div>

{/*        <div className="pt-4">
            <h3 className="text-lg text-gray-800 mb-3 uppercase font-medium">rentang harga</h3>
            <PriceSlider min={0} max={1000} onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}/>
        </div>*/}

        <button className="flex items-center justify-center gap-3 w-full px-3 py-2 bg-blue-800 text-white rounded-lg">
            Cari Produk 
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>
    </div>
    )

}