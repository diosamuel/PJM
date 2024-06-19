export default function WhatsappMessage(carts) {
	let total = 0
	if(carts.length > 1){
      total = carts.reduce((x,y)=>x.harga*x.quantity+y.harga*y.quantity)
    }else if(carts.length == 1){
      total = carts[0].harga*carts[0].quantity
    }else{
      total = 0
    }
	let craft = `Halo admin, saya mau pesan`

	carts.forEach(cart=>{
		craft += `\n${cart.quantity} barang ${cart.nama}`
	})
	craft += `\n\nTOTAL: Rp${Number(total).toLocaleString('id-ID')}`
	return `https://wa.me/6283876944538?text=${craft}`
}