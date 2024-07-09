export function TransformSanPham(item) {
	return {
		id: item.maSP,
		name: item.tenSP,
		price: item.giaBan,
		amount: 1,
	};
}
