import { Accordion, Card, Button } from "react-bootstrap";
import HomeStory from "./HomeStory";
import HomeTutorial from "./HomeTutorial";

const HomeDropdown = () => {
	const HomeDropdownStyle = () => {
		if (window.innerWidth > 480) {
			return { width: "70rem" };
		} else {
			return {
				width: "20rem",
			};
		}
	};
	return (
		<Accordion defaultActiveKey="0" style={HomeDropdownStyle()}>
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Button} variant="link" eventKey="0">
						Nuestra historia
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="0">
					<Card.Body>
						<HomeStory />
					</Card.Body>
				</Accordion.Collapse>
			</Card>
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Button} variant="link" eventKey="1">
						¿Cómo pedir comida?
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="1">
					<Card.Body>
						<HomeTutorial />
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};

export default HomeDropdown;
