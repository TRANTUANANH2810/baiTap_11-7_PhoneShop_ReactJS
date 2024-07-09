import css from "./index.module.css";

export function XemChiTiet({
	name,
	img,
	manHinh,
	heDieuHanh,
	cameraTruoc,
	cameraSau,
	ram,
	rom,
}) {
	return (
		<>
			<div className={css.wrapper}>
				<div className={css.img}>
					<h2>{name}</h2>
					<img src={img} />
				</div>
				<div className={css.detail}>
					<h2>Thông số kỹ thuật</h2>
					<table className="table">
						<tbody>
							<tr>
								<td>Màn Hình</td>
								<td>{manHinh}</td>
							</tr>
							<tr>
								<td>Hệ điều hành</td>
								<td>{heDieuHanh}</td>
							</tr>

							<tr>
								<td>Camera trước</td>
								<td>{cameraTruoc}</td>
							</tr>
							<tr>
								<td>Camera sau</td>
								<td>{cameraSau}</td>
							</tr>
							<tr>
								<td>RAM</td>
								<td>{ram}</td>
							</tr>
							<tr>
								<td>ROM</td>
								<td>{rom}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
