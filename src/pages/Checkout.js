import { useSelector } from "react-redux";

function Checkout() {
	const checkout = useSelector((state) => state.checkout.titles);
	console.log(checkout);
	return <p>{checkout.length === 0 ? "Tu carrito esta vacio" : checkout}</p>;
}

export default Checkout;
