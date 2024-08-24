export default function WhatsappMessage(carts) {
	let total = carts.reduce((acc, cart) => acc + cart.harga * cart.quantity, 0);

	let craft = 'Halo Bosq, saya ingin memesan :';
	carts.forEach((cart) => {
		craft += `\n${cart.quantity} ${cart.nama} = Rp${Number(cart.harga).toLocaleString('id-ID')}`;
	});
	craft += `\n\nTOTAL: Rp${Number(total).toLocaleString('id-ID')}`;
	craft += "\nApakah masih ada Bosq?"
	return `https://wa.me/6281310893418?text=${encodeURIComponent(craft)}`;
}
