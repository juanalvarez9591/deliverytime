import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Food from "./Food";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "./menu.json";
import React, { useState } from "react";

function Menu(props) {
	const [menu, changeMenu] = useState(generateComponents("chivito"));

	function generateComponents(i) {
		return data[i].map((i) => (
			<Col key={i.key}>
				<Food
					title={i.title}
					subtitle={i.subtitle}
					price={i.price}
					url={i.url}
					key={i.key}
				/>
			</Col>
		));
	}

	return (
		<>
			<button
				type="button"
				onClick={() => changeMenu(generateComponents("pack"))}
			>
				Chivito
			</button>

			<Container>
				<Row>{menu}</Row>
			</Container>
		</>
	);
}

export default Menu;
