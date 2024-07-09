import { Fragment, useState } from "react";
import { mockData } from "./__mock-data__";
import { Card } from "./components/card";
import { XemChiTiet } from "./components/xem-chi-tiet";
import { GioHang } from "./components/gio-hang";
import { TransformSanPham } from "../../utils";

export function PhoneShop() {
	const [listSanPham, setListSanPham] = useState([
		{
			id: 1212,
			name: "iPhone",
			price: 1000,
			amount: 2,
		},
	]);

	const [phoneDetail, setPhoneDetail] = useState(mockData[1]);

	const onChangePhoneDetail = (phone) => {
		setPhoneDetail(phone);
	};

	const onAddSanPham = (sanPham) => {
		// convert
		sanPham = TransformSanPham(sanPham);

		// kiem tra ton tai

		const item = listSanPham.find((i) => i.id === sanPham.id);

		// tang so luong neu da ton tai, them vao neu chua ton tai
		if (item) {
			item.amount += 1;
		} else {
			listSanPham.push(sanPham);
		}

		setListSanPham([...listSanPham]);
		// setListSanPham
	};

	return (
		<>
			{/* GioHang */}
			<div className="container">
				<GioHang listSanPham={listSanPham} />
			</div>

			{/* Card */}
			<div
				style={{
					display: "flex",
					gap: 10,
					justifyContent: "center",
				}}
			>
				{mockData.map((item) => {
					return (
						<Fragment key={item.maSP}>
							<Card
								name={item.tenSP}
								price={item.giaBan}
								image={item.hinhAnh}
								onChangePhoneDetail={() => {
									onChangePhoneDetail(item);
								}}
								onAddSanPham={() => {
									onAddSanPham(item);
								}}
							/>
						</Fragment>
					);
				})}
			</div>

			{/* Xem Chi Tiet */}
			<XemChiTiet
				name={phoneDetail.tenSP}
				img={phoneDetail.hinhAnh}
				manHinh={phoneDetail.manHinh}
				heDieuHanh={phoneDetail.heDieuHanh}
				cameraTruoc={phoneDetail.cameraTruoc}
				cameraSau={phoneDetail.cameraSau}
				ram={phoneDetail.ram}
				rom={phoneDetail.rom}
			/>
		</>
	);
}
