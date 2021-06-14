import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const BusinessLogo =
	"https://mir-s3-cdn-cf.behance.net/project_modules/disp/5ea7298839539.560c656d1a01f.png";

function Header() {
	return (
		<Navbar bg="dark" variant="dark">
			<Link to="/">
				<img src={BusinessLogo} style={{ width: "8rem" }}></img>
			</Link>
			<Nav className="mr-auto" style={{ padding: "1rem" }}>
				<Link to="/menu">Menu</Link>
			</Nav>
			<Nav style={{ padding: "1rem" }}>
				<Link to="/checkout">Encargar</Link>
			</Nav>
		</Navbar>
	);
}

export default Header;
