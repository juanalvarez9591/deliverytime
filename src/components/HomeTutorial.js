import { Link } from "react-router-dom";
import menulogo from "../images/resources/fork.png";
import checkoutlogo from "../images/resources/checkout.png";

const HomeTutorial = () => {
	return (
		<h2 id="TutorialText">
			¡Es muy simple! Anda al{" "}
			<Link to="/menu">
				menú <img alt="logo" src={menulogo}></img>
			</Link>
			, agrega al carrito lo que tengas ganas de pedir. Luego anda a tu{" "}
			<Link to="/checkout">
				carrito de compras <img alt="logo" src={checkoutlogo}></img>
			</Link>
			, pone tu dirección, si querés pagar con tarjeta marca la casilla y
			finalmente dale al botón verde. (No almacenamos ningún tipo de
			datos)
		</h2>
	);
};

export default HomeTutorial;
