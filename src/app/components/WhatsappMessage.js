export default function WhatsappMessage(carts) {
	let total = carts.reduce((acc, cart) => acc + cart.harga * cart.quantity, 0);

	let craft = 'Halo bosq, saya mau pesan';
	carts.forEach((cart) => {
		craft += `\n${cart.quantity} barang ${cart.nama}`;
	});
	craft += `\n\nTOTAL: Rp${Number(total).toLocaleString('id-ID')}`;

	return `https://wa.me/6283876944538?text=${encodeURIComponent(craft)}`;
}
