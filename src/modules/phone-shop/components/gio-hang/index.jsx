// import css from "./index.module.css";
export function GioHang({ listSanPham }) {
	return (
		<>
			<div>
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Tên sản phẩm</th>
							<th scope="col">Giá</th>
							<th scope="col">Số lượng</th>
							<th scope="col">Tổng tiền</th>
						</tr>
					</thead>
					<tbody>
						{listSanPham.map((i) => {
							return (
								<tr key={i.id}>
									<th scope="row">{i.id}</th>
									<td>{i.name}</td>
									<td>{i.price}</td>
									<td>
										<button className="btn btn-success">-</button>
										<span> {i.amount} </span>
										<button className="btn btn-success">+</button>
									</td>
									<td>{i.amount * i.price}</td>

									<td className=" btn btn-danger">Xóa</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
}
