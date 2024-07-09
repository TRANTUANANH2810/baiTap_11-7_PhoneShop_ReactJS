import { Text } from "../../../../components/text";
import css from "./index.module.css";

export function Card({ name, price, image, id }) {
	return (
		<>
			<div className={css.card}>
				<div className={css["card-img"]}>
					<img src={image} alt="image" />
				</div>

				<div className={css["card-content"]}>
					<Text as={"h2"}>{name}</Text>
					<Text as={"p"}>${price}</Text>

					<div className={css["card-footer"]}>
						<button onClick={() => {}} className="btn btn-dark">
							Xem chi tiết
						</button>

						<button onClick={() => {}} className="btn btn-dark">
							Thêm vào giỏ hàng
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
