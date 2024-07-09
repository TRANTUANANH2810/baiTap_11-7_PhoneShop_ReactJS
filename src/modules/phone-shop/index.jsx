import { Fragment, useState } from "react";
import { mockData } from "./__mock-data__";
import { Card } from "./components/card";
import { XemChiTiet } from "./components/xem-chi-tiet";

export function PhoneShop() {
	const [phoneDetail, setPhoneDetail] = useState(mockData[1]);

	const onChangePhoneDetail = (phone) => {
		setPhoneDetail(phone);
	};

	return (
		<>
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
