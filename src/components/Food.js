import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Food(props) {
	const Order = () => console.log("Encargado");

	return (
		<>
			<Card style={{ width: "12rem", height: "20rem" }}>
				<Card.Img
					variant="top"
					src={props.url}
					style={{ height: "8rem" }}
				/>
				<Card.Body>
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
				<Card.Footer
					style={{
						display: "grid",
						justifyContent: "center",
					}}
				>
					<Button onClick={Order}>Encargar ya!</Button>
				</Card.Footer>
			</Card>
		</>
	);
}

export default Food;
