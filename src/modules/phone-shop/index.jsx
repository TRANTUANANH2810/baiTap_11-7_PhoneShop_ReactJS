import { Fragment } from "react";
import { mockData } from "./__mock-data__";
import { Card } from "./components/card";
import { XemChiTiet } from "./components/xem-chi-tiet";

export function PhoneShop() {
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
							/>
						</Fragment>
					);
				})}
			</div>

			{/* Xem Chi Tiet */}
			<XemChiTiet
				name={mockData[0].tenSP}
				img={mockData[0].hinhAnh}
				manHinh={mockData[0].manHinh}
				heDieuHanh={mockData[0].heDieuHanh}
				cameraTruoc={mockData[0].cameraTruoc}
				cameraSau={mockData[0].cameraSau}
				ram={mockData[0].ram}
				rom={mockData[0].rom}
			/>
		</>
	);
}
