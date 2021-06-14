import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import forkimg from "../images/resources/fork.png";
import checkoutimg from "../images/resources/checkout.png";
const BusinessLogo =
	"https://mir-s3-cdn-cf.behance.net/project_modules/disp/5ea7298839539.560c656d1a01f.png";

function Header() {
	return (
		<Navbar bg="softy" style={{ height: "5rem" }}>
			<Link to="/">
				<img
					src={BusinessLogo}
					style={{ width: "8rem" }}
					alt="Logo"
				></img>
			</Link>
			<Nav className="mr-auto" style={{ padding: "1rem" }}>
				<Link to="/menu">
					<img
						src={forkimg}
						style={{ height: "50px", width: "60px" }}
						alt="Menu"
					></img>
				</Link>
			</Nav>
			<Nav style={{ padding: "1rem" }}>
				<Link to="/checkout">
					<img
						src={checkoutimg}
						style={{ height: "50px", width: "60px" }}
						alt="Checkout"
					></img>
				</Link>
			</Nav>
		</Navbar>
	);
}

export default Header;
