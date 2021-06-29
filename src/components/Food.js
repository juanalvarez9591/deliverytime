import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addTitle, addUrl, addPrice } from "../redux/checkout";

function Food(props) {
	const dispatch = useDispatch();

	const sendData = (title, price, url) => {
		dispatch(addTitle(title));
		dispatch(addUrl(url));
		dispatch(addPrice(price));
	};

	return (
		<>
			<Card style={{ width: "12rem", height: "20rem" }}>
				<Card.Img
					variant="top"
					src={props.url}
					style={{ height: "8rem" }}
				/>
				<Card.Body style={{ height: "8rem" }}>
					<Card.Title style={{ fontSize: "1.2rem" }}>
						{props.title}
					</Card.Title>
					<Card.Subtitle
						style={{ fontSize: "0.7rem", height: "1rem" }}
					>
						{props.price}
					</Card.Subtitle>
					<Card.Text style={{ fontSize: "0.7rem", height: "3rem" }}>
						{props.subtitle}
					</Card.Text>
				</Card.Body>
				<Card.Body
					style={{
						display: "grid",
						justifyContent: "center",
					}}
				>
					<Button
						onClick={() =>
							sendData(props.title, props.url, props.price)
						}
					>
						Encargar ya!
					</Button>
				</Card.Body>
			</Card>
		</>
	);
}

export default Food;
