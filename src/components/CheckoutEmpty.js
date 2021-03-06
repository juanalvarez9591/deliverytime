import { Link } from "react-router-dom";

const CheckoutEmpty = () => {
	return (
		<div id="checkoutempty">
			<h1>
				Todavía no tenés nada en el carrito,{" "}
				<Link to="/menu">mira nuestro menú</Link>
			</h1>
		</div>
	);
};

export default CheckoutEmpty;
