import { Image } from "react-bootstrap";
import logo from "../images/resources/logo.jpg";

const HomeStatic = () => {
	return (
		<>
			<Image id="LandingLogo" src={logo} roundedCircle />
			<h1>150 años de historia y excelencia</h1>
		</>
	);
};

export default HomeStatic;
