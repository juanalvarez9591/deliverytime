import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addTitle, addPrice } from "../redux/checkout";
import React, { useState } from "react";

function Food(props) {
	const [click, setClick] = useState("button");

	const dispatch = useDispatch();

	const sendData = (title, price) => {
		dispatch(addTitle(title));
		dispatch(addPrice(price));
	};

	const ButtonFeedback = () => {
		setClick("buttonloading");
		sendData(props.title, props.price);
		setTimeout(() => setClick("primary"), 500);
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
					<Button variant={click} onClick={() => ButtonFeedback()}>
						Encargar ya!
					</Button>
				</Card.Body>
			</Card>
		</>
	);
}

export default Food;
