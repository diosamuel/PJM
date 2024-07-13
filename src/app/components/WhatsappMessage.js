export default function WhatsappMessage(carts) {
	let total = carts.reduce((acc, cart) => acc + cart.harga * cart.quantity, 0);

	let craft = 'Halo Bosq, saya ingin memesan :';
	carts.forEach((cart) => {
		craft += `\n${cart.quantity} barang ${cart.nama} = ${cart.harga}`;
	});
	craft += `\n\nTOTAL: Rp${Number(total).toLocaleString('id-ID')}`;
	craft += "\nApakah masih ada Bosq?"
	return `https://wa.me/6283876944538?text=${encodeURIComponent(craft)}`;
}
