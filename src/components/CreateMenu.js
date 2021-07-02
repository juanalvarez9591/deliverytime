import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Food from "./Food";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "./menu.json";
import React, { useState } from "react";

function CreateMenu(props) {
	const [menu, changeMenu] = useState(
		generateComponents(Object.keys(data)[0])
	);

	function generateComponents(i) {
		const FoodMenuStyle = () => {
			if (window.innerWidth > 480) {
				return { padding: "0.3rem", alignContent: "center" };
			} else {
				return {
					padding: "0.3rem",
					alignContent: "center",
					margin: "auto",
				};
			}
		};
		return data[i].map((i) => (
			<div key={i.key} style={FoodMenuStyle()}>
				<Food
					title={i.title}
					subtitle={i.subtitle}
					price={i.price}
					url={i.url}
					key={i.key}
				/>
			</div>
		));
	}

	function generateTables() {
		return Object.keys(data).map((i) => (
			<Nav.Item key={i}>
				<Nav.Link
					eventKey={i}
					onSelect={() => changeMenu(generateComponents(i))}
					key={i}
				>
					{i}
				</Nav.Link>
			</Nav.Item>
		));
	}

	return (
		<>
			<Tab.Container
				id="left-tabs-example"
				defaultActiveKey={Object.keys(data)[0]}
			>
				<Row style={{ padding: "1rem" }}>
					<Col sm={3}>
						<Nav variant="pills" className="flex-column">
							{generateTables()}
						</Nav>
					</Col>
					<Col sm={9}>
						<Tab.Content>
							<Container>
								<Row style={{ padding: "0.5rem" }}>{menu}</Row>
							</Container>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</>
	);
}

export default CreateMenu;
