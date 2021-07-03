import { Navbar, Nav } from "react-bootstrap";

const Footer = () => {
	return (
		<footer>
			<Navbar
				bg="softy"
				style={{
					height: "2.5rem",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<i> Hecho por Juan Alvarez</i>
				<a
					href="mailto:juanalvarez9591@gmail.com"
					style={{ color: "white" }}
				>
					¿Precisas un sitio web como este para tu negocio?
				</a>
			</Navbar>
		</footer>
	);
};

export default Footer;
