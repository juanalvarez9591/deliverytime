import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Food from "../components/Food";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../components/menu.json";
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
			<Tab.Container id="left-tabs-example" defaultActiveKey="chivito">
				<Row>
					<Col sm={3}>
						<Nav variant="pills" className="flex-column">
							<Nav.Item>
								<Nav.Link
									eventKey="pack"
									onSelect={() =>
										changeMenu(generateComponents("pack"))
									}
								>
									Pack
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									eventKey="chivito"
									onSelect={() =>
										changeMenu(
											generateComponents("chivito")
										)
									}
								>
									Chivito
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9}>
						<Tab.Content>
							<Container>
								<Row>{menu}</Row>
							</Container>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</>
	);
}

export default Menu;
